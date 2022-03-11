import { initRouter, displayView } from './router.js';

// primero iniciamos el router pasando como selector el division appContainer
initRouter('#appContainer');
// mostrar vista iniciala según el path actual de la página web
displayView(window.location.pathname);

// import { Landing } from './components/landing.js';

// document.addEventListener('DOMContentLoaded', () => {
//   const landing = document.createElement('app-landing');
//   document.querySelector('main').appendChild(landing);
// });

// import { logInHtml, singInHtml } from './html-generator.js';
// import { signInFirebase, logInFirebase, userState } from './lib/firebase.js';
// import { signInValidation, logInValidation, UserSignIn } from './lib/index.js';

// const btnLogInEmail = document.getElementById('btnLogIn');
// const fillHtml = document.querySelector('#welcomeContent');
// const btnSingInEmail = document.getElementById('btnSingIn');

// btnSingInEmail.addEventListener('click', () => {
//   const usersignin = document.createElement('user-signin');
//   document.querySelector('main').appendChild(usersignin);
// });

//   fillHtml.innerHTML = UserSignIn();

//   const buttonSingIn = document.getElementById('buttonSingIn');
//   const email = document.getElementById('inputEmail');
//   const password = document.getElementById('passwordEmail');
//   const confirmPasswordEmail = document.getElementById('confirmPasswordEmail');
//   const linkLogIn = document.getElementById('linkLogIn');

//   buttonSingIn.addEventListener('click', async() => {
//     signInValidation(email.value, password.value, confirmPasswordEmail.value);

//     const userSignIn = await signInFirebase(email.value, password.value);
//     console.table(userSignIn);

//     document.getElementById('inputEmail').value = '';
//     document.getElementById('passwordEmail').value = '';
//     document.getElementById('confirmPasswordEmail').value = '';
//   });

//   linkLogIn.addEventListener('click', () => {
//     fillHtml.innerHTML = logInHtml();

//     const buttonLogInEmail = document.getElementById('buttonLogIn');

//     buttonLogInEmail.addEventListener('click', async() => {
//       logInValidation(email.value, password.value);

//       const userLogIn = await logInFirebase(email.value, password.value);
//       console.log('jhovanni', userLogIn);
//       console.log('ghfdgxfxdsdfs', userState());

//       document.getElementById('inputEmail').value = '';
//       document.getElementById('passwordEmail').value = '';
//     });
//   });
// });

// btnLogInEmail.addEventListener('click', () => {
//   fillHtml.innerHTML = logInHtml();

//   const buttonLogInEmail = document.getElementById('buttonLogIn');
//   const email = document.getElementById('inputEmail');
//   const password = document.getElementById('passwordEmail');
//   const linkSingIn = document.getElementById('linkSingIn');

//   buttonLogInEmail.addEventListener('click', async() => {
//     logInValidation(email.value, password.value);

//     const userLogIn = await logInFirebase(email.value, password.value);
//     console.log('jhovanni', userLogIn);
//     console.log('ghfdgxfxdsdfs', userState());

//     document.getElementById('inputEmail').value = '';
//     document.getElementById('passwordEmail').value = '';
//   });

//   linkSingIn.addEventListener('click', () => {
//     fillHtml.innerHTML = singInHtml();

//     const buttonSingIn = document.getElementById('buttonSingIn');
//     const confirmPasswordEmail = document.getElementById('confirmPasswordEmail');

//     buttonSingIn.addEventListener('click', async() => {
//       signInValidation(email.value, password.value, confirmPasswordEmail.value);

//       const userSignIn = await signInFirebase(email.value, password.value);
//       console.table(userSignIn);

//       document.getElementById('inputEmail').value = '';
//       document.getElementById('passwordEmail').value = '';
//       document.getElementById('confirmPasswordEmail').value = '';
//     });
//   });
// });
