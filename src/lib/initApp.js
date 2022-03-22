/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
/* eslint import/no-unresolved: */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function initApp() {
  // Your web app's Firebase configuration
  const firebaseConfig = {

      apiKey: "AIzaSyBV1upmSkvZp-qyFv_0YRBVJb-2luXPivQ",
      authDomain: "data2-64c71.firebaseapp.com",
      projectId: "data2-64c71",
      storageBucket: "data2-64c71.appspot.com",
      messagingSenderId: "914295642551",
      appId: "1:914295642551:web:3aaab72cfb317c0d233032"
    };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
}
