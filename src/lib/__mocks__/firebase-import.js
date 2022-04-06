// import { signInFirebase } from "../firebase";

/* eslint-disable no-unused-vars */
const getAuth = jest.fn(() => {

});

const signOut = (auth) => Promise.resolve({});

const createUserWithEmailAndPassword = (auth, email, password) => Promise.resolve({});

const signInWithEmailAndPassword = (auth, email, password) => Promise.resolve({});

const onAuthStateChanged = (auth) => Promise.resolve({});

const sendEmailVerification = () => Promise.resolve({});

// const sendSignInLinkToEmail = (auth, email, actionCodeSettings) => Promise.resolve({});

const initializeApp = (firebaseConfig) => {

};

const getAnalytics = (app) => {

};

// const signInFirebase = (email, password) => Promise.resolve({});

// const logInFirebase = (email, password) => Promise.resolve({});

// const emailVerification = () => Promise.resolve({});

export {
  getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  onAuthStateChanged, sendEmailVerification, initializeApp, getAnalytics,
  // signInFirebase, logInFirebase, emailVerification,
};
