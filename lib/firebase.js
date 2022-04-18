/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import {
  initializeApp,
  getAnalytics,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from './firebase-import.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAxjhtM71_9a2ybvzEzRiPQLZdBbjPacAs',
  authDomain: 'data3-4894f.firebaseapp.com',
  projectId: 'data3-4894f',
  storageBucket: 'data3-4894f.appspot.com',
  messagingSenderId: '541738057068',
  appId: '1:541738057068:web:cedceed7bc3bf73bd6c749',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();

// observador de estado de autenticación y obtén datos del usuario
let userActual;

let authLoadResolve;
const authLoadPromise = new Promise((resolve) => {
  authLoadResolve = resolve;
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    userActual = user;
    console.log('user', userActual);
  } else {
    // User is signed out
    userActual = undefined;
  }
  authLoadResolve();
});

export const waitForAuthLoad = () => authLoadPromise;

export const getUserPromise = () => authLoadPromise;

export const userState = () => userActual;

export const signInFirebase = (email, password) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user);

export const logInFirebase = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => userCredential.user);

export const logout = () => signOut(auth).then(() => {
});

export const emailVerification = () => sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
  });
