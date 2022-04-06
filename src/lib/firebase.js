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
  // sendSignInLinkToEmail,
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
// console.log('que tiene auth?', auth);

// observador de estado de autenticación y obtén datos del usuario
let userActual;

let authLoadResolve;
const authLoadPromise = new Promise((resolve) => {
  authLoadResolve = resolve;
});

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

    userActual = user;
    console.log('user', userActual);

    // authInitPromise = Promise.resolve(user);
  } else {
    // User is signed out
    userActual = undefined;
    // authInitPromise.resolve(undefined);
  }
  authLoadResolve();
});

export const waitForAuthLoad = () => authLoadPromise;

// export const getUser = async () => {
//   await authLoadPromise;
//   return userActual;
// }

export const getUserPromise = () => authLoadPromise;

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
