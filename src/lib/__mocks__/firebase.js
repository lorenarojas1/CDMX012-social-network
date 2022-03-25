// import { signInFirebase } from "../firebase";

/* eslint-disable no-unused-vars */
const getAuth = jest.fn(() => {

});

const signOut = (auth) => Promise.resolve({});

const createUserWithEmailAndPassword = (auth, email, password) => Promise.resolve({});

const signInWithEmailAndPassword = (auth, email, password) => Promise.resolve({});

const onAuthStateChanged = (auth) => Promise.resolve({});

const sendSignInLinkToEmail = (auth, email, actionCodeSettings) => Promise.resolve({});

const initializeApp = (firebaseConfig) => {

};

const getAnalytics = (app) => {

};

const signInFirebase = (email, password) => Promise.resolve({});

const logInFirebase = (email, password) => Promise.resolve({});

export { getAuth };
export { signOut };
export { createUserWithEmailAndPassword };
export { signInWithEmailAndPassword };
export { onAuthStateChanged };
export { sendSignInLinkToEmail };
export { initializeApp };
export { getAnalytics };

export { signInFirebase };
export { logInFirebase };

// export {
//   getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,
//   onAuthStateChanged, sendSignInLinkToEmail, initializeApp, getAnalytics,
// };
