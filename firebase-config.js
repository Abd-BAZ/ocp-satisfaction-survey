// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9BkIkxTnBoI-btoNJ7fNV8vI9ncLnZQ8",
  authDomain: "ocp-survey-results.firebaseapp.com",
  projectId: "ocp-survey-results",
  storageBucket: "ocp-survey-results.firebasestorage.app",
  messagingSenderId: "513392019524",
  appId: "1:513392019524:web:fc4550822fa114794a1411",
  measurementId: "G-YVQ41W6ZK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export db and helper functions for use in script.js
export { db, collection, addDoc, serverTimestamp };
