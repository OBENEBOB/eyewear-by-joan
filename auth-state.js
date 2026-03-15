// auth-state.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    onAuthStateChanged,
    signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    getDoc 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA3KrbX7rfLEpbKYPgXBkozyI0gNkveU1Y",
    authDomain: "eyewearbyjoan.firebaseapp.com",
    projectId: "eyewearbyjoan",
    storageBucket: "eyewearbyjoan.firebasestorage.app",
    messagingSenderId: "878303136785",
    appId: "1:878303136785:web:cf7039dc5fcfdce86c75b0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Update user interface based on auth state
onAuthStateChanged(auth, async (user) => {
    const userAccountLink = document.getElementById('userAccountLink');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const dropdownArrow = document.getElementById('dropdownArrow');
    const userDropdown = document.getElementById('userDropdown');
    const mobileUserName = document.getElementById('mobileUserName');
    
    if (user) {
        // User is logged in - get their data from Firestore
        try {
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                const firstName = userData.name ? userData.name.split(' ')[0] : 'User';
                
                // Update the account link to be a dropdown trigger instead of login link
                if (userAccountLink) {
                    userAccountLink.href = '#'; // Remove link to login
                    userAccountLink.classList.add('logged-in');
                }
                
                // Show dropdown arrow
                if (dropdownArrow) dropdownArrow.style.display = 'inline-block';
                
                // Show dropdown menu on hover
                if (userDropdown) userDropdown.style.display = 'none'; // CSS will handle hover
                
                // Update display name
                if (userNameDisplay) userNameDisplay.textContent = firstName;
                if (mobileUserName) mobileUserName.textContent = firstName;
            }
        } catch (error) {
            console.error('Error getting user data:', error);
        }
    } else {
        // User is logged out - show login link
        if (userAccountLink) {
            userAccountLink.href = 'login.html';
            userAccountLink.classList.remove('logged-in');
        }
        
        // Hide dropdown arrow
        if (dropdownArrow) dropdownArrow.style.display = 'none';
        
        // Hide dropdown menu
        if (userDropdown) userDropdown.style.display = 'none';
        
        // Reset display name
        if (userNameDisplay) userNameDisplay.textContent = 'Account';
        if (mobileUserName) mobileUserName.textContent = '';
    }
});

// Logout function
window.logout = async function() {
    try {
        await signOut(auth);
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Logout error:', error);
    }
};

// Add logout button listener
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }
});

// Add CSS to handle dropdown on hover
const style = document.createElement('style');
style.textContent = `
    .user-menu {
        position: relative;
        display: inline-block;
    }
    
    .user-menu:hover .user-dropdown {
        display: block !important;
    }
    
    .user-dropdown {
        position: absolute;
        top: 45px;
        right: 0;
        background: white;
        min-width: 200px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        border: 1px solid #f0f0f0;
        padding: 10px 0;
        z-index: 1000;
        display: none;
    }
    
    .user-dropdown a {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        color: #000;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    
    .user-dropdown a:hover {
        background-color: #FFCDD2;
    }
    
    .user-dropdown hr {
        margin: 8px 0;
        border: none;
        border-top: 1px solid #f0f0f0;
    }
    
    .user-account.logged-in {
        cursor: pointer;
    }
`;
document.head.appendChild(style);
// Add to the onAuthStateChanged function
const mobileUserLink = document.getElementById('mobileUserLink');
const mobileDropdown = document.getElementById('mobileDropdown');
const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');

if (user) {
    // Logged in
    if (mobileUserLink) {
        mobileUserLink.href = '#'; // Remove link
        mobileUserLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Toggle mobile dropdown
            if (mobileDropdown) {
                mobileDropdown.style.display = mobileDropdown.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
    
    // Mobile logout
    if (mobileLogoutBtn) {
        mobileLogoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }
} else {
    // Logged out
    if (mobileUserLink) {
        mobileUserLink.href = 'login.html';
    }
    if (mobileDropdown) {
        mobileDropdown.style.display = 'none';
    }
}