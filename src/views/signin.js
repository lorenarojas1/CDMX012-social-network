import { signInFirebase } from '../lib/firebase.js';
import { navigateTo } from '../lib/navigator.js';

const expRegEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
/**
* Cadena de texto HTML para la vista signin.
 * Incluye sus estilos protegidos por un elemento wrapper,
 * para no afectar a elementos de otras vistas.
 */
const view = /* html */ `
<div class="signin-wrapper">
  <form>
    <h2>Registrase</h2>
    <div class="form-group">
      <div><label>Dirección de email *</label></div>
      <div><input type="email" name="email"></div>
      <span id="error-email"></span>
    </div>
    <div class="form-group">
      <div><label>Contraseña *</label></div>
      <div><input type="password" name="password"></div>
      <span id="error-password"></span>
    </div>
    <div class="form-group">
      <div><label>Confirma tu contraseña *</label></div>
      <div><input type="password" name="confirmPassword"></div>
      <span id="error-confirmPassword"></span>
    </div>
    <div class="form-group">
      <button type="submit" id="buttonSingIn">Registrarse</button>
    </div>
    <span id="mensajeError"></span>
  </form>
  <div>¿Ya tienes una cuenta? <a href="#" id='login-link'>Inicia sesión</a></div>
</div>

<style>
.signin-wrapper {
  background-color: #DAE4FF;
  border-radius: 1.5em;
  max-width: 30em;
  padding: 1em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signin-wrapper input {
  padding: 1em;
  border-radius: 1.5em;
  background-color: white;
  border: 0;
}
.signin-wrapper button {
  padding: 1em;
  border-radius: 1.5em;
  display: inline-block;
  background-color: #B76CE3;
  color: white;
  border: 0;
}
.signin-wrapper .form-group {
  padding: .25em;
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
  const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]');
  console.log('emilinput', emailInput);
  return {
    email: emailInput.value,
    password: passwordInput.value,
    confirmPassword: confirmPasswordInput.value,
  };
}

function dataValidation(formData) {
  const messageInput1 = document.getElementById('error-email');
  const messageInput2 = document.getElementById('error-password');
  const messageInput3 = document.getElementById('error-confirmPassword');
  let email = false;
  let password = false;
  let confirmPassword = false;

  if ((expRegEmail.test(formData.email)) !== true) {
    messageInput1.innerHTML = 'Ingrese un correo válido';
  } else {
    messageInput1.innerHTML = '';
    email = true;
  }
  if (formData.password.length < 6) {
    messageInput2.innerHTML = 'La contraseña debe contener por lo menos 6 caracteres';
  } else if (formData.password.includes(' ')) {
    messageInput2.innerHTML = 'La contrseña no puede incluir espacios vacios';
  } else {
    messageInput2.innerHTML = '';
    password = true;
  }
  if (formData.password !== formData.confirmPassword) {
    messageInput3.innerHTML = 'Las contraseñas no son iguales';
  } else {
    console.log('Los datos fueron enviados a firebases', messageInput3);
    messageInput3.innerHTML = '';
    confirmPassword = true;
  }
  return (email && password && confirmPassword);
}
/**
 * Realiza validaciones sobre el formulario e intenta hacer un registro si los campos son validos.
 * @param {event} e evento submit
 */
async function attemptSignIn(e) {
  e.preventDefault();
  const formData = getFormData();
  if (dataValidation(formData) !== true) {
    return;
  }

  try {
    await signInFirebase(formData.email, formData.password);
  } catch (error) {
    console.error(`No se pudo hacer registro, code=${error.code}, message=${error.message}`);
    const messageError = document.getElementById('mensajeError');
    messageError.innerHTML = 'No se pudo realizar el registro';
    // el usuario ya existe(personalizar los errores con firebase)
    return;
  }

  navigateTo('/home');
}

/**
 * Objecto vista para signin.
 */
export default {
  render: () => view,
  afterRender: () => {
    document.getElementById('login-link').addEventListener('click', () => navigateTo('/login'));
    document.querySelector('form').addEventListener('submit', attemptSignIn);
  },
};
