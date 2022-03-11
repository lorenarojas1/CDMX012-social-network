import { signInFirebase } from '../lib/firebase.js';
import { navigateTo } from '../lib/navigator.js';

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
    </div>
    <div class="form-group">
      <div><label>Contraseña *</label></div>
      <div><input type="password" name="password"></div>
    </div>
    <div class="form-group">
      <div><label>Confirma tu contraseña *</label></div>
      <div><input type="password" name="confirmPassword"></div>
    </div>
    <div class="form-group">
      <button type="submit">Registrarse</button>
    </div>
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

  return {
    email: emailInput.value,
    password: passwordInput.value,
    confirmPassword: confirmPasswordInput.value,
  };
}

/**
 * Realiza validaciones sobre el formulario e intenta hacer un registro si los campos son validos.
 * @param {event} e evento submit
 */
async function attemptSignIn(e) {
  e.preventDefault();
  const formData = getFormData();
  // TODO: validar formData sea valido segun reglas de registro
  // TODO: mostrar mesajes de error si los datos son invalidos
  const user = await signInFirebase(formData.email, formData.password);
  // TODO: verificar si firebase regresó error y mostrarlo
  console.log(user);

  // despues que el registro fue exitoso, cambiar de vista
  navigateTo('/');// afterRender: () => {

}

/**
 * Objecto vista para signin.
 */
export default {
  render: () => view,
  afterRender: () => {
    document.getElementById('login-link').addEventListener('click', () => navigateTo('/login'));
  },
};
