import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBY1ACdHI34TNh3xRAYxro4xho-qd28blY",
  authDomain: "wedding-invitation-databade.firebaseapp.com",
  projectId: "wedding-invitation-databade",
  storageBucket: "wedding-invitation-databade.firebasestorage.app",
  messagingSenderId: "605925123984",
  appId: "1:605925123984:web:2f5758e864d5f062e4f515",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);