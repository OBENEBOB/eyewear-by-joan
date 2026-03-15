// firebaseauth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ============================================
// YOUR FIREBASE CONFIGURATION
// ============================================
const firebaseConfig = {
    apiKey: "AIzaSyA3KrbX7rfLEpbKYPgXBkozyI0gNkveU1Y",
    authDomain: "eyewearbyjoan.firebaseapp.com",
    projectId: "eyewearbyjoan",
    storageBucket: "eyewearbyjoan.firebasestorage.app",
    messagingSenderId: "878303136785",
    appId: "1:878303136785:web:cf7039dc5fcfdce86c75b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// ============================================
// HELPER FUNCTION - Show messages
// ============================================
function showMessage(message, divId, type = 'success') {
    const messageDiv = document.getElementById(divId);
    if (messageDiv) {
        messageDiv.style.display = 'block';
        messageDiv.innerText = message;
        messageDiv.className = `messageDiv ${type}`;
        
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => {
                messageDiv.style.display = 'none';
                messageDiv.style.opacity = '1';
            }, 300);
        }, 3000);
    } else {
        alert(message);
    }
}

// ============================================
// CHECK IF USER IS ADMIN - Using role field
// ============================================
async function checkIfAdmin(userId) {
    try {
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            return userData.role === 'admin' || userData.role === 'super_admin';
        }
        return false;
    } catch (error) {
        console.error('Error checking admin status:', error);
        return false;
    }
}

// ============================================
// REDIRECT USER BASED ON ROLE
// ============================================
async function redirectUser(user) {
    const isAdmin = await checkIfAdmin(user.uid);
    
    if (isAdmin) {
        window.location.href = 'admin-dashboard.html';
    } else {
        window.location.href = 'index.html';
    }
}

// ============================================
// SETUP EVENT LISTENERS WHEN DOM IS READY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // REGISTER FORM HANDLER
    // ============================================
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', async (event) => {
            event.preventDefault();
            
            const name = document.getElementById('regName')?.value.trim();
            const email = document.getElementById('regEmail')?.value.trim();
            const phone = document.getElementById('regPhone')?.value.trim();
            const password = document.getElementById('regPassword')?.value.trim();
            const confirmPassword = document.getElementById('regConfirmPassword')?.value.trim();
            
            if (!name || !email || !phone || !password || !confirmPassword) {
                showMessage('Please fill in all fields', 'signUpMessage', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showMessage('Passwords do not match!', 'signUpMessage', 'error');
                return;
            }
            
            if (password.length < 6) {
                showMessage('Password must be at least 6 characters!', 'signUpMessage', 'error');
                return;
            }
            
            registerBtn.disabled = true;
            registerBtn.innerHTML = '<span class="spinner"></span> Creating Account...';
            
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                
                await setDoc(doc(db, 'users', user.uid), {
                    name: name,
                    email: email,
                    phone: phone,
                    createdAt: new Date().toISOString(),
                    uid: user.uid,
                    role: 'user'
                });
                
                showMessage('Account created successfully!', 'signUpMessage', 'success');
                
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
                
            } catch (error) {
                console.error('Registration error:', error);
                
                let errorMessage = 'Registration failed. Please try again.';
                if (error.code === 'auth/email-already-in-use') {
                    errorMessage = 'This email is already registered.';
                } else if (error.code === 'auth/invalid-email') {
                    errorMessage = 'Invalid email address.';
                } else if (error.code === 'auth/weak-password') {
                    errorMessage = 'Password is too weak.';
                }
                
                showMessage(errorMessage, 'signUpMessage', 'error');
                
                registerBtn.disabled = false;
                registerBtn.innerHTML = '<i class="fas fa-user-plus"></i> Sign Up';
            }
        });
    }

    // ============================================
// LOGIN FORM HANDLER - FIXED FOR ADMIN REDIRECT
// ============================================
const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
    loginBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        
        const email = document.getElementById('loginEmail')?.value.trim();
        const password = document.getElementById('loginPassword')?.value.trim();
        
        if (!email || !password) {
            showMessage('Please enter email and password', 'signInMessage', 'error');
            return;
        }
        
        loginBtn.disabled = true;
        loginBtn.innerHTML = '<span class="spinner"></span> Logging in...';
        
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            showMessage('Login successful! Redirecting...', 'signInMessage', 'success');
            
            // Store basic user info
            localStorage.setItem('ebj_isLoggedIn', 'true');
            localStorage.setItem('ebj_userEmail', user.email);
            
            // Check if admin and redirect accordingly
            const isAdmin = await checkIfAdmin(user.uid);
            console.log('User role check - isAdmin:', isAdmin);
            
            if (isAdmin) {
                console.log('Admin user detected - redirecting to admin dashboard');
                window.location.href = 'admin-dashboard.html';
            } else {
                console.log('Regular user - redirecting to home');
                window.location.href = 'index.html';
            }
            
        } catch (error) {
            console.error('Login error:', error);
            
            let errorMessage = 'Login failed. Please try again.';
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No account found with this email.';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address.';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Too many failed attempts. Try again later.';
            }
            
            showMessage(errorMessage, 'signInMessage', 'error');
            
            loginBtn.disabled = false;
            loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
        }
    });
}
    // ============================================
    // FORGOT PASSWORD HANDLER - FIXED!
    // ============================================
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', async (event) => {
            event.preventDefault();
            
            const email = document.getElementById('loginEmail')?.value.trim();
            
            if (!email) {
                showMessage('Please enter your email address first.', 'signInMessage', 'info');
                return;
            }
            
            // Disable the link temporarily
            forgotPasswordLink.style.pointerEvents = 'none';
            forgotPasswordLink.style.opacity = '0.5';
            const originalText = forgotPasswordLink.textContent;
            forgotPasswordLink.textContent = 'Sending...';
            
            try {
                await sendPasswordResetEmail(auth, email);
                showMessage('Password reset email sent! Check your inbox.', 'signInMessage', 'success');
            } catch (error) {
                console.error('Password reset error:', error);
                
                if (error.code === 'auth/user-not-found') {
                    showMessage('No account found with this email.', 'signInMessage', 'error');
                } else if (error.code === 'auth/invalid-email') {
                    showMessage('Invalid email address.', 'signInMessage', 'error');
                } else {
                    showMessage('Failed to send reset email. Try again.', 'signInMessage', 'error');
                }
            } finally {
                // Re-enable the link
                setTimeout(() => {
                    forgotPasswordLink.style.pointerEvents = 'auto';
                    forgotPasswordLink.style.opacity = '1';
                    forgotPasswordLink.textContent = originalText;
                }, 2000);
            }
        });
    }

// ============================================
// GOOGLE SIGN IN HANDLER - FIXED VERSION
// ============================================
const googleBtn = document.getElementById('googleLoginBtn');
if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
        googleBtn.disabled = true;
        googleBtn.innerHTML = '<span class="spinner"></span> Connecting...';
        
        try {
            // This setting helps with the Dynamic Links warning
            googleProvider.setCustomParameters({
                prompt: 'select_account'
            });
            
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            
            console.log('Google sign-in successful:', user.email);
            
            // Store basic user info
            localStorage.setItem('ebj_isLoggedIn', 'true');
            localStorage.setItem('ebj_userEmail', user.email);
            
            // Check if user document exists
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            
            if (!userDoc.exists()) {
                // Create new user document
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName || 'Google User',
                    email: user.email,
                    phone: user.phoneNumber || '',
                    createdAt: new Date().toISOString(),
                    uid: user.uid,
                    role: 'user', // Default role is 'user', not admin
                    photoURL: user.photoURL || ''
                });
                console.log('New user created in Firestore');
                
                // Show success message
                showMessage('Account created successfully! Redirecting...', 'signInMessage', 'success');
                
                // New users are not admin, so redirect to home after a short delay
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                // Get existing user data
                const userData = userDoc.data();
                console.log('Existing user data:', userData);
                
                // Check if admin (using the role field)
                const isAdmin = userData.role === 'admin' || userData.role === 'super_admin';
                console.log('User role check - isAdmin:', isAdmin);
                
                showMessage('Login successful! Redirecting...', 'signInMessage', 'success');
                
                // Redirect based on role after a short delay
                setTimeout(() => {
                    if (isAdmin) {
                        console.log('Admin user detected - redirecting to admin dashboard');
                        window.location.href = 'admin-dashboard.html';
                    } else {
                        console.log('Regular user - redirecting to home');
                        window.location.href = 'index.html';
                    }
                }, 1500);
            }
            
        } catch (error) {
            console.error('Google sign-in error:', error);
            
            let errorMessage = 'Google sign-in failed. ';
            if (error.code === 'auth/popup-closed-by-user') {
                errorMessage = 'Sign-in cancelled. You closed the popup.';
            } else if (error.code === 'auth/popup-blocked') {
                errorMessage = 'Popup was blocked by your browser. Please allow popups for this site.';
            } else if (error.code === 'auth/cancelled-popup-request') {
                errorMessage = 'Only one popup request at a time. Please try again.';
            } else if (error.code === 'auth/unauthorized-domain') {
                errorMessage = 'This domain is not authorized for Google sign-in. Please add it to Firebase Console.';
            } else {
                errorMessage += 'Please try again.';
            }
            
            showMessage(errorMessage, 'signInMessage', 'error');
            
            // Re-enable the button
            googleBtn.disabled = false;
            googleBtn.innerHTML = '<i class="fab fa-google"></i> Continue with Google';
        }
    });
}
});

export { auth, db, checkIfAdmin };