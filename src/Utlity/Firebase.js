import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyDBN39EAEdFbvgKnZXVjWz-b9UkMQMpncY",
  authDomain: "clone-34471.firebaseapp.com",
  projectId: "clone-34471",
  storageBucket: "clone-34471.appspot.com",  // Fixed the storage bucket URL
  messagingSenderId: "502699246617",
  appId: "1:502699246617:web:585cccc2d2927d26375688"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);