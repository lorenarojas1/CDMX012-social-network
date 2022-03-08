import { logInHtml, singInHtml } from './html-generator.js';
import { signIn, logIn, userState } from './firebase.js';

const btnLogInEmail = document.getElementById('btnLogIn');
const fillHtml = document.querySelector('#welcomeContent');
const btnSingInEmail = document.getElementById('btnSingIn');
const regExEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/


console.log(userState());

btnSingInEmail.addEventListener('click', () => {
  fillHtml.innerHTML = singInHtml();

  const buttonSingIn = document.getElementById('buttonSingIn');
  const email = document.getElementById('inputEmail');
  const password = document.getElementById('passwordEmail');
  const confirmPasswordEmail = document.getElementById('confirmPasswordEmail');
  const linkLogIn = document.getElementById('linkLogIn');
  //const regExSpace = /^\s/

  buttonSingIn.addEventListener('click', async() => {
    // antes poner que los campos no contengan espacios vacios,
    // [a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}
    if ((email.value && password.value && confirmPasswordEmail.value) === '') {
      return console.log('llene todos los campos');
    } else if ((regExEmail.test(email.value)) != true) {
      console.log('Ingrese un correo válido');
      let message = document.getElementById('error-email');
      return message.innerHTML = 'Ingrese un correo válido';
    } else if ((password.value.length) < 6) {
      return console.log('La contraseña debe contener por lo menos 6 caracteres');
    } else if (password.value.includes(' ')) {
      return console.log('La contraseña no puede incluir espacios en blanco')
    } else if (password.value != confirmPasswordEmail.value) { //considerar numero de caracteres minimos o maximos, y cuales no son válidos
      return console.log('contraseñas no coinciden');
    } else {
      console.log('mensaje que te muestre que su registro fue exitoso');
    }



    // let inputPassArray = password.value.split('');

    // inputPassArray.forEach((element) => {
    //   if (element === ' ') {
    //     return console.log('La contraseña no puede incluir espacios en blanco')
    //   }
    // })

    const userSignIn = await signIn(email.value, password.value);
    console.table(userSignIn);

    document.getElementById('inputEmail').value = '';
    document.getElementById('passwordEmail').value = '';
    document.getElementById('confirmPasswordEmail').value = '';

  });

  linkLogIn.addEventListener('click', () => {
    fillHtml.innerHTML = logInHtml();

    const buttonLogInEmail = document.getElementById("buttonLogIn");
    const email = document.getElementById("inputEmail");
    const password = document.getElementById("passwordEmail");


    buttonLogInEmail.addEventListener('click', async() => {

      if ((email.value && password.value) === "") {
        return console.log("llene todos los campos");

      } else if ((regExEmail.test(email.value)) != true) {
        return console.log("Ingrese un correo válido");
      }

      const userLogIn = await logIn(email.value, password.value);
      console.log('jhovanni', userLogIn);
      console.log('ghfdgxfxdsdfs', userState());

      //document.getElementById("inputEmail").value = "";
      //document.getElementById("passwordEmail").value = "";
    });

  })


});

btnLogInEmail.addEventListener('click', () => {
  fillHtml.innerHTML = logInHtml();

  const buttonLogInEmail = document.getElementById('buttonLogIn');
  const email = document.getElementById('inputEmail');
  const password = document.getElementById('passwordEmail');
  const linkSingIn = document.getElementById('linkSingIn');

  buttonLogInEmail.addEventListener('click', async() => {

    if ((email.value && password.value) === "") {
      return console.log('llene todos los campos');

    } else if ((regExEmail.test(email.value)) != true) {
      return console.log('Ingrese un correo válido');
    }

    const userLogIn = await logIn(email.value, password.value);
    console.log('jhovanni', userLogIn);
    console.log('ghfdgxfxdsdfs', userState());

    //document.getElementById("inputEmail").value = "";
    //document.getElementById("passwordEmail").value = "";
  })

  linkSingIn.addEventListener('click', () => {
    fillHtml.innerHTML = singInHtml();


    const buttonSingIn = document.getElementById('buttonSingIn');
    const email = document.getElementById('inputEmail');
    const password = document.getElementById('passwordEmail');
    const confirmPasswordEmail = document.getElementById('confirmPasswordEmail');
    const linkLogIn = document.getElementById('linkLogIn');
    //const regExSpace = /^\s/

    buttonSingIn.addEventListener('click', async() => {
      // antes poner que los campos no contengan espacios vacios,
      // [a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}
      if ((email.value && password.value && confirmPasswordEmail.value) === '') {
        return console.log('llene todos los campos');
      } else if ((regExEmail.test(email.value)) != true) {
        return console.log('Ingrese un correo válido');
      } else if ((password.value.length) < 6) {
        return console.log('La contraseña debe contener por lo menos 6 caracteres');
      } else if (password.value.includes(' ')) {
        return console.log('La contraseña no puede incluir espacios en blanco')
      }
      //considerar numero de caracteres minimos o maximos, y cuales no son válidos
      else if (password.value != confirmPasswordEmail.value) {
        return console.log('contraseñas no coinciden');
      }

      const userSignIn = await signIn(email.value, password.value);
      console.table(userSignIn);

      document.getElementById('inputEmail').value = '';
      document.getElementById('passwordEmail').value = '';
      document.getElementById('confirmPasswordEmail').value = '';

    });

  });
});