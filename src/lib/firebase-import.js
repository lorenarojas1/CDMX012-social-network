/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  // sendSignInLinkToEmail,
  sendEmailVerification,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

export { initializeApp };
export { getAnalytics };

export {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  // sendSignInLinkToEmail,
  sendEmailVerification,

};

export {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js';

export {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  query,
  where,
  deleteDoc,
  getDocs,
  onSnapshot,
  collection,
  addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
