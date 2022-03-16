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
      <div class="input-email">
         <div><input type="email" name="email" placeholder='Correo Electrónico'></div>
         <span class="error" id="error-email">&nbsp;</span>
      </div>
      <div class="input-email">
         <div><input type="password" name="password" placeholder='Contraseña'></div>
         <span class="error" id="error-password">&nbsp;</span>
       </div>
       <div class="input-email">
         <div><input type="password" name="confirmPassword" placeholder='Confirma tu contraseña'></div>
         <span class="error" id="error-confirmPassword">&nbsp;</span>
      </div>
      <div class="form-group">
         <button type="submit" id="buttonSingIn">Registrarse</button>
         <span class="error" id="mensajeError">&nbsp;</span>
      </div>
  </form> 
    <div class='question'>¿Ya tienes una cuenta? <em><a href="#" id='login-link'>Inicia sesión</a></em></div>

    <div class="separador">
       <div class='linea-uno'></div>
       <p class='signInWith'>O ingresa con</p>
       <div class='linea-dos'></div>
    </div>
    <img class="img-fluid" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVlJREFUSEvNlYExBEEQRd9lIANEQAbIgAgQwREBIkAGREAGiIDLgAyIgHpqRrUxO7N3Vaeuq7bqamfu/+7+3X8nLDkmS8ZnJQh2gR1gOz1rwEt6roHXVhdaFQh0CRx12ngPHAPvtXtDBGZ7B2yM1MhKTsYSmPnzAPhTArFlOW5bVdYquAEOA8BHArAVMc4Bk6lmni+WBAr6UID7TlEXipLArM4C0gFQZj4XUUnwmEZyqELfe+ezwXIaKy4JnOn19GcFtT1ltMC9ewHYie/4d4KxLYpVOUlbQ7r1RLafVx1VPZ+GO5vRPnpj6vrvNcbUjXesrcJ4Kxe0tmhlRpIomnYQQ4/SqzK4Z3qSi/oTNYLslnma4n0XTsLadM2S2/7KomV2LliNpCaJ4JL+cdSeXduaKGANXLPTj+ay6wikkPtJPH/bQhfSkbbfC39wOtM57nglvsnjUh249QX0WEAZ2ArXmQAAAABJRU5ErkJggg=="/>

</div>

<style>

.signin-wrapper {
  width:100%;
  margin-top: 200px;
  box-sizing: border-box 
}
.signin-wrapper .question{
    margin-top:0px;
    font-size: 15px;
    display: contents;
  }
.signin-wrapper input {
    border: 2px solid #ccc;
    border-radius: 10px;
    background: #fff;
    padding: 15px;
    font-size: 18px;
    color: #070e1f;
    width: 100%;
    display: flex;
    flex-flow: column;
    box-sizing: border-box ;
   
}
.signin-wrapper input:focus {
    border: 2px solid #949292 ;
    outline:none;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;

}

.signin-wrapper #buttonSingIn {
  width:100%;
    padding: 15px;
    border-radius: 10px;
   background: #74C3FC;
   font-size: 18px;
   color: #070e1f;
   border: solid 2px #36a5f5;
}

.signin-wrapper #buttonSingIn:hover {
  background: #22a3ff;
    color: #e3f2fd;
    border: 2px solid #215f8d;
    font-weight: bold;
    cursor: pointer;
}

.signin-wrapper .separador{
  display: flex;
  justify-content: space-between;
}

.signin-wrapper .linea-uno,.signin-wrapper .linea-dos{
  width: 40%;
  border-top: 1px solid black;
  margin-top: 50px;
  padding:5px;
}

.signin-wrapper .signInWith{
  width:20%;
  padding:5px;
  text-align: center;
}
.signin-wrapper .img-fluid {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

.signin-wrapper .error {
    color: red;
    margin-top:0px;
    font-size: 15px;
    display: block;
    width: 100%;
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra extra large devices (large laptops and desktops, 1400px and up) */
@media only screen and (min-width: 1400px) {

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
  // const emailInput = document.querySelector('input[name="email"]');
  // const passwordInput = document.querySelector('input[name="password"]');
  // const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]');
  const messageInput1 = document.getElementById('error-email');
  const messageInput2 = document.getElementById('error-password');
  const messageInput3 = document.getElementById('error-confirmPassword');
  let email = false;
  let password = false;
  let confirmPassword = false;

  if ((expRegEmail.test(formData.email)) !== true) {
    // emailInput.style.border = '2px solid red';
    messageInput1.innerHTML = 'Correo inválido';
  } else {
    // emailInput.style.border = '2px solid #ccc';
    messageInput1.innerHTML = '&nbsp;';
    email = true;
  }
  if (formData.password.length < 6) {
    // passwordInput.style.border = '2px solid red';
    messageInput2.innerHTML = 'Requiere al menos 6 caracteres';
  } else if (formData.password.includes(' ')) {
    // passwordInput.style.border = '2px solid red';
    messageInput2.innerHTML = 'No puede incluir espacios vacios';
  } else {
    // passwordInput.style.border = '2px solid #ccc';
    messageInput2.innerHTML = '&nbsp;';
    password = true;
  }
  if (formData.password !== formData.confirmPassword) {
    // passwordInput.style.border = '2px solid red';
    // confirmPasswordInput.style.border = '2px solid red';
    messageInput3.innerHTML = 'Las contraseñas no son iguales';
  } else {
    // passwordInput.style.border = '2px solid #ccc';
    // confirmPasswordInput.style.border = '2px solid #ccc';
    messageInput3.innerHTML = '&nbsp;';
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
