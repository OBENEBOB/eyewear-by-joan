// orders.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { 
  getAuth, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { 
  getFirestore, 
  collection,
  addDoc,
  setDoc, 
  doc, 
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// ---------------------
// Firebase config
// ---------------------
const firebaseConfig = {
  apiKey: "AIzaSyB375LVewbh0oMrpz8zceQtdVN6FM8KzAg",
  authDomain: "formlogin-6d888.firebaseapp.com",
  projectId: "formlogin-6d888",
  storageBucket: "formlogin-6d888.appspot.com",
  messagingSenderId: "418842419948",
  appId: "1:418842419948:web:a5c5d87f8a8d364b7afbc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ---------------------
// Save Order to Firestore
// ---------------------
export async function saveOrder(orderData) {
  try {
    // Get current user
    const user = auth.currentUser;
    
    // Prepare order data exactly like user data pattern
    const orderForFirestore = {
      // Order details
      orderNumber: orderData.orderNumber || Math.floor(Math.random() * 10000),
      
      // User info (like in userData)
      userId: user ? user.uid : null,
      userEmail: user ? user.email : (orderData.customer?.email || 'guest@example.com'),
      
      // Customer details (like firstName, lastName in userData)
      customerName: orderData.customer?.name || '',
      customerWhatsapp: orderData.customer?.whatsapp || '',
      customerCity: orderData.customer?.city || '',
      customerArea: orderData.customer?.area || '',
      customerAddress: orderData.customer?.address || '',
      customerEmail: orderData.customer?.email || '',
      deliveryDate: orderData.customer?.deliveryDate || null,
      deliveryNotes: orderData.customer?.notes || '',
      
      // Items (stored as array like in userData)
      items: orderData.items || [],
      
      // Payment details
      paymentMethod: orderData.paymentMethod || '',
      paymentMethodText: orderData.paymentMethodText || '',
      transactionId: orderData.transactionId || 'N/A',
      
      // Totals
      subtotal: orderData.subtotal || 0,
      delivery: orderData.delivery || 1500,
      discount: orderData.discount || 0,
      total: orderData.total || 0,
      
      // Delivery method
      deliveryMethod: orderData.deliveryMethod || 'standard',
      deliveryMethodText: orderData.deliveryMethod === 'standard' ? 'Standard (3-5 days)' : 'Express (1-2 days)',
      
      // Status (like role in userData)
      status: 'pending',
      statusText: 'Pending',
      
      // Timestamps (like createdAt in userData)
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      
      // Timeline (stored as array)
      timeline: [
        {
          status: 'Order Placed',
          date: serverTimestamp(),
          completed: true
        },
        {
          status: 'Payment Confirmed',
          date: serverTimestamp(),
          completed: true
        },
        {
          status: 'Processing',
          date: null,
          completed: false
        },
        {
          status: 'Shipped',
          date: null,
          completed: false
        },
        {
          status: 'Delivered',
          date: null,
          completed: false
        }
      ]
    };

    // Save to Firestore (like setDoc for users)
    const docRef = await addDoc(collection(db, "orders"), orderForFirestore);
    console.log("Order saved with ID:", docRef.id);
    
    // Store in localStorage like user data
    localStorage.setItem(`order_${docRef.id}`, JSON.stringify(orderForFirestore));
    
    return { success: true, orderId: docRef.id };
    
  } catch (error) {
    console.error('Error saving order:', error);
    return { success: false, error: error.message };
  }
}

// ---------------------
// Get User Orders (like getUserData)
// ---------------------
export async function getUserOrders(userId) {
  try {
    const ordersRef = collection(db, "orders");
    const q = query(
      ordersRef, 
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );
    
    const querySnapshot = await getDocs(q);
    const orders = [];
    
    querySnapshot.forEach((doc) => {
      orders.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return { success: true, orders };
    
  } catch (error) {
    console.error('Error getting user orders:', error);
    return { success: false, error: error.message };
  }
}

// ---------------------
// Get Single Order by ID (like getDoc for users)
// ---------------------
export async function getOrderById(orderId) {
  try {
    const orderDocRef = doc(db, "orders", orderId);
    const orderSnap = await getDoc(orderDocRef);
    
    if (orderSnap.exists()) {
      return { success: true, order: { id: orderSnap.id, ...orderSnap.data() } };
    } else {
      return { success: false, error: "Order not found" };
    }
    
  } catch (error) {
    console.error('Error getting order:', error);
    return { success: false, error: error.message };
  }
}

// ---------------------
// Update Order Status (like updating user role)
// ---------------------
export async function updateOrderStatus(orderId, newStatus, statusText) {
  try {
    const orderRef = doc(db, "orders", orderId);
    
    await setDoc(orderRef, {
      status: newStatus,
      statusText: statusText,
      updatedAt: serverTimestamp()
    }, { merge: true });
    
    return { success: true };
    
  } catch (error) {
    console.error('Error updating order status:', error);
    return { success: false, error: error.message };
  }
}

// ---------------------
// Listen to Auth State (like in firebaseauth.js)
// ---------------------
export function onAuthStateChange(callback) {
  return onAuthStateChanged(auth, callback);
}

// Export auth and db for use in other files
export { auth, db };