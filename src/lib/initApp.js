/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
/* eslint import/no-unresolved: */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function initApp() {
  // Your web app's Firebase configuration
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
}
