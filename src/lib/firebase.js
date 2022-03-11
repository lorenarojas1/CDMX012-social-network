/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCqTISmv9xl4M68SQGLo_ELcW00XEBiXPU',
  authDomain: 'social-network-9b189.firebaseapp.com',
  projectId: 'social-network-9b189',
  storageBucket: 'social-network-9b189.appspot.com',
  messagingSenderId: '742781158291',
  appId: '1:742781158291:web:616299e44ca78b89639e66',
  measurementId: 'G-71HV0NW8SG',
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);


const auth = getAuth();

let userActual = undefined;

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const isAnonymous = user.isAnonymous;
    const metadata = user.metadata;
    const multiFactor = user.multiFactor;
    const phoneNumber = user.phoneNumber;
    const photoURL = user.photoURL;
    const providerData = user.providerData;
    const providerId = user.providerId;
    const refreshToken = user.refreshToken;
    const tenantId = user.tenantId;

    console.log(user);
    userActual = user;
  } else {
    // User is signed out
    userActual = undefined;
  }
});


export const userState = () => userActual;

export const signInFirebase = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      return userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
      return error;
    });
}


export const logInFirebase = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      return userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return error;
    });
}