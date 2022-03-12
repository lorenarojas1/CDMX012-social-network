import { logInFirebase } from '../lib/firebase.js';
import { navigateTo } from '../lib/navigator.js';

const expRegEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

const view = /* html */ `
<section class="logInEmail" id="login-wrapper">
    <form>
       <div class="input-email">
           <input type='email' class='inputEmail' id='inputEmail' name='email' placeholder='Correo Electrónico'>
       </div>  
           <span id="error-email"></span>
       <div class="input-password">
           <input type='password' class='inputPasswordEmail' id='passwordEmail' name='password' placeholder='Contraseña'>
       </div>
          <span id="error-password"></span>
        <p class='questionPassword'>¿Olvidaste tu contraseña?</p>
  
        <div class='buttonLogInEmail'>
           <button type="submit" class='logIn' id='buttonLogIn'>Iniciar sesión</button>
           <span id="mensajeError"></span>
        </div>
    </form>
        <p class='questionLogIn'>¿No tienes una cuenta?  <a href='#' id='signin-link'>Registrate</a></p>
        <div class='linea'></div>
        <p class='logInWith'>O ingresa con</p>
      </section>

      <style>
#login-wrapper {
  width:80%;
  margin-top: 200px;


  }

#login-wrapper .questionPassword{
    margin-top:0px;
    font-size: 15px;
  }

  #login-wrapper .input-email, #login-wrapper .input-password{

    border: 2px solid #ccc;
    border-radius: 10px;
    background: #fff;
    padding: 15px;
    outline: none;
    width: 100%;
    margin-top: 20px;
    font-size: 18px;
    color: #070e1f;
  }   

  #login-wrapper #buttonLogIn{
    
    width: 100%;
   border-radius: 10px;
   background: #74C3FC;
   font-size: 18px;
   margin: 10px;
   padding: 10px;
   color: #070e1f;
   border: solid 2px #36a5f5;
}
  }


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

function dataValidation(formData) {
  const messageInput1 = document.getElementById('error-email');
  const messageInput2 = document.getElementById('error-password');
  let email = false;
  let password = false;

  if ((expRegEmail.test(formData.email)) !== true) {
    messageInput1.innerHTML = 'Ingrese un correo válido';
  } else {
    messageInput1.innerHTML = '';
    email = true;
  }
  if (formData.password.length < 6) {
    messageInput2.innerHTML = 'La contraseña debe contener por lo menos 6 caracteres';
  }
  if (formData.password.includes(' ')) {
    messageInput2.innerHTML = 'La contrseña no puede incluir espacios vacios';
  } else {
    password = true;
    console.log('Los datos fueron enviados');
  }
  return (email && password);
}
/**
   * Realiza validaciones sobre el formulario e intenta hacer un registro si los campos son validos.
   * @param {event} e evento submit
   */
async function attemptLogIn(e) {
  e.preventDefault();

  const formData = getFormData();
  if (dataValidation(formData) !== true) {
    return;
  }

  try {
    await logInFirebase(formData.email, formData.password);
  } catch (error) {
    console.warning(`No se pudo iniciar sesión, code=${error.code}, message=${error.message}`);
    const messageError = document.getElementById('mensajeError');
    messageError.innerHTML = 'No se pudo inicial  sesión';
    // falta agregar que en caso de que no esté registrado mande mensaje
    return;
  }

  // despues que el registro fue exitoso, cambiar de vista
  navigateTo('/home');
}

export default {
  render: () => view,
  afterRender: () => {
    document.getElementById('signin-link').addEventListener('click', () => navigateTo('/signin'));
    document.querySelector('form').addEventListener('submit', attemptLogIn);
  },
};
