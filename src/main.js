import { logInHtml, singInHtml } from './html-generator.js';

const btnLogInEmail = document.getElementById("btnLogIn");
const fillHtml = document.querySelector("#welcomeContent");
const btnSingInEmail = document.getElementById("btnSingIn");
const regExEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/



btnLogInEmail.addEventListener("click", () => {
    fillHtml.innerHTML = logInHtml();

    const buttonLogInEmail = document.getElementById("buttonLogIn");
    const email = document.getElementById("inputEmail");
    const password = document.getElementById("passwordEmail");

    buttonLogInEmail.addEventListener("click", () => {

        if ((email.value && password.value) === "") {
            return console.log("llene todos los campos");

        } else if ((regExEmail.test(email.value)) != true) {
            return console.log("ingrese un correo válido");
        }
        document.getElementById("inputEmail").value = "";
        document.getElementById("passwordEmail").value = "";
    });

});

btnSingInEmail.addEventListener("click", () => {
    fillHtml.innerHTML = singInHtml();

    const buttonSingIn = document.getElementById("buttonSingIn");
    const email = document.getElementById("inputEmail");
    const password = document.getElementById("passwordEmail");
    const confirmPasswordEmail = document.getElementById("confirmPasswordEmail");
    //const regExSpace = /^\s/

    buttonSingIn.addEventListener("click", () => {
        //antes poner que los campos no contengan espacios vacios, [a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}
        if ((email.value && password.value && confirmPasswordEmail.value) === "") {
            return console.log("llene todos los campos");

        } else if ((regExEmail.test(email.value)) != true) {
            return console.log("ingrese un correo válido");
        }
        //considerar numero de caracteres minimos o maximos, y cuales no son válidos
        else if (password.value != confirmPasswordEmail) {
            return console.log("contraseñas no coinciden");

        }
        document.getElementById("inputEmail").value = "";
        document.getElementById("passwordEmail").value = "";
        document.getElementById("confirmPasswordEmail").value = "";

    })

});






// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//     });