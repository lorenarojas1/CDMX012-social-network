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

const firebaseConfig = {

  apiKey: 'AIzaSyBV1upmSkvZp-qyFv_0YRBVJb-2luXPivQ',
  authDomain: 'data2-64c71.firebaseapp.com',
  projectId: 'data2-64c71',
  storageBucket: 'data2-64c71.appspot.com',
  messagingSenderId: '914295642551',
  appId: '1:914295642551:web:3aaab72cfb317c0d233032',

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

const auth = getAuth();

// observador de estado de autenticación y obtén datos del usuario
let userActual;

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // const uid = user.uid;
    // const displayName = user.displayName;
    // const email = user.email;
    // const emailVerified = user.emailVerified;
    // const isAnonymous = user.isAnonymous;
    // const metadata = user.metadata;
    // const multiFactor = user.multiFactor;
    // const phoneNumber = user.phoneNumber;
    // const photoURL = user.photoURL;
    // const providerData = user.providerData;
    // const providerId = user.providerId;
    // const refreshToken = user.refreshToken;
    // const tenantId = user.tenantId;

    console.log(user);
    userActual = user;
  } else {
    // User is signed out
    userActual = undefined;
  }
});

export const userState = () => userActual;

export const signInFirebase = (email, password) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user);
// .catch((error) => {
//   console.table(error);
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // console.error(errorMessage);
//   throw error;
// });

export const logInFirebase = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => userCredential.user);

export const logout = () => signOut(auth).then(() => {
});

export const emailVerification = () => sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
