/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendSignInLinkToEmail,
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

// Proporciona a Firebase las instrucciones para construir el vínculo de correo electrónico.

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'www.google.com/',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios',
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12',
  },
  dynamicLinkDomain: 'example.page.link',
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

const auth = getAuth();

// observador de estado de autenticación y obtén datos del usuario
let userActual;
// let userEmailVerification;

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
    // userEmailVerification = emailVerified;
  } else {
    // User is signed out
    userActual = undefined;
    // userEmailVerification = undefined;
  }
});

export const userState = () => userActual;

// export const userEmailVerified = () => userEmailVerification;

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

// Envía el vínculo de autenticación al correo electrónico del usuario

export const emailVerification = (email) => sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  });
