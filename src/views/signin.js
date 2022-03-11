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
      <button type="submit" id="buttonSingIn">Registrarse</button>
    </div>
    <span id='mensajeError'></span>
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
const expRegEmail = (/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/);
/**
 * Realiza validaciones sobre el formulario e intenta hacer un registro si los campos son validos.
 * @param {event} e evento submit
 */
async function attemptSignIn(e) {
  e.preventDefault();
  const formData = getFormData();
  console.log(formData);

  //  const dataValidation (formData.email, formData.password, formData.confirmPassword){
  //   if ((formData.email&&formData.password&&formData.confirmPassword)===''){
  //     return console.log('Llene todos los campos')
  //   } else if (formData.email!= expRegEmail){
  //         return console.log('Formato de correo invalido');
  //   } else if (formData.password.length<6){
  //     return console.log('La contraseña debe contener por lo menos 6 caracteres');
  //   } else if(formData.password.includes(' ')){
  //     return console.log('La contrseña no puede incluir espacios vacios');
  //   }else if(formData.password!=formData.confirmPassword){
  //     return console.log('Las contraseñas no son iguales');
  //   }else{
  //     return console.log('Los datos fueron enviados');
  //   }

  // }
  // TODO: validar formData sea valido segun reglas de registro
  // TODO: mostrar mesajes de error si los datos son invalidos
  try {
    await signInFirebase(formData.email, formData.password);
  } catch (error) {
    console.error(`No se pudo hacer registro, code=${error.code}, message=${error.messaage}`);
    const messageError = document.getElementById('mensajeError');
    messageError.innerHTML = 'No se pudo realizar el registro';
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
