import { logInFirebase } from '../lib/firebase.js';
import { navigateTo } from '../lib/navigator.js';

const view = /* html */ `
<section class="logInEmail">
    <div class='inputLogInEmail'>
           <input type='email' class='inputEmail' id='inputEmail' name='email' placeholder='Correo Electrónico'>
           <input type='password' class='inputPasswordEmail' id='passwordEmail' name='password' placeholder='Contraseña'>
        </div>
        <p class='questionPassword'>¿Olvidaste tu contraseña?</p>
  
        <div class='buttonLogInEmail'>
           <button type='button' class='logIn' id='buttonLogIn'>Iniciar sesión</button>
        </div>
        <p class='questionLogIn'>¿No tienes una cuenta?  <a href='#' id='signin-link'>Registrate</a></p>
        <div class='linea'></div>
        <p class='logInWith'>O ingresa con</p>
      </section>

      <style>
      </style>
`;

/**
 * Lee los inputs del formulario y regresa un objeto con sus valores
 * @returns valores del formulario
 */
function getFormData() {
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    return {
        email: emailInput.value,
        password: passwordInput.value,
    };
}

/**
   * Realiza validaciones sobre el formulario e intenta hacer un registro si los campos son validos.
   * @param {event} e evento submit
   */
async function attemptLogIn(e) {
    e.preventDefault();
    const formData = getFormData();
    // TODO: validar formData sea valido segun reglas de registro
    // TODO: mostrar mesajes de error si los datos son invalidos
    const user = await logInFirebase(formData.email, formData.password);
    // TODO: verificar si firebase regresó error y mostrarlo
    console.log(user);

    // despues que el registro fue exitoso, cambiar de vista
    navigateTo('/');
}
/**
   * Objecto vista para signin.
   */
export default {
    /**
       * Crear y regresa HTML para la vista signin
       * @returns string HTML
       */
    // render: () => template,
    render: () => view,
    // /**
    //  * Busca, en el DOM, elementos de la vista signin para reaccionar a eventos del usuario
    //  */
    afterRender: () => {
        document.getElementById('signin-link').addEventListener('click', () => navigateTo('/signin'));

        //   const form = document.querySelector('form');
        //   form.addEventListener('submit', attemptLogIn);
    },
};

// export const logInValidation = (email, password) => {

//   if ((email && password) === "") {
//     return console.log('llene todos los campos');

//   } else if ((regExEmail.test(email)) != true) {
//     return console.log('Ingrese un correo válido');
//   } else {
//     console.log('redirigir a la pagina del muro')
//   }
//   //falta agregar que en caso de que no esté registrado mande mensaje 
// };
