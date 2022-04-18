/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { signInFirebase, userState, emailVerification } from '../lib/firebase.js';
import { navigateTo } from '../lib/navigator.js';
import { validatorFormSignin } from '../lib/validator.js';

/**
* Cadena de texto HTML para la vista signin.
 * Incluye sus estilos protegidos por un elemento wrapper,
 * para no afectar a elementos de otras vistas.
 */
const view = /* html */ `
<section class="logInSigninEmail" id="signin-wrapper">
  <div class="contenido-signin">
  <form>
      <div class="input-email">
         <div><input type="email" class="border" name="email" id="input-email" novalidate="true" placeholder="Correo Electrónico"></div>
         <span class="error" id="error-email">&nbsp;</span>
      </div>
      <div class="input-email">
         <div><input type="password" name="password" id='input-password' placeholder='Contraseña'></div>
         <span class="error" id="error-password">&nbsp;</span>
       </div>
       <div class="input-email">
         <div><input type="password" name="confirmPassword" id= 'input-confirm-password' placeholder='Confirma tu contraseña'></div>
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

  </section>


<style>

.contenido-signin {
  width:100%;
  margin-top: 200px;
  box-sizing: border-box; 
}
#signin-wrapper .question{
    margin-top:0px;
    font-size: 15px;
    display: contents;
  }
  
#signin-wrapper input {
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
    box-shadow: 0 2px 2px rgba(0 0 0/ 0.15);

}
#signin-wrapper input:focus {
    border: 2px solid #949292 ;
    outline:none;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;

}

#signin-wrapper #buttonSingIn {
  width:100%;
  padding: 15px;
  border-radius: 10px;
  background: #74C3FC;
   font-size: 18px;
   color: #070e1f;
   border: solid 2px #36a5f5;
   box-shadow: 0 2px 2px rgba(0 0 0/ 0.15);
}

#signin-wrapper #buttonSingIn:hover {
  background: #22a3ff;
    color: #e3f2fd;
    border: 2px solid #215f8d;
    font-weight: bold;
    cursor: pointer;
}

#signin-wrapper .separador{
  display: flex;
  justify-content: space-between;
}

#signin-wrapper .linea-uno,#signin-wrapper .linea-dos{
  width: 40%;
  border-top: 1px solid black;
  margin-top: 50px;
  padding:5px;
}

#signin-wrapper .signInWith{
  width:20%;
  padding:5px;
  text-align: center;
}
#signin-wrapper .img-fluid {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

#signin-wrapper .error {
    color: red;
    margin-top:0px;
    font-size: 15px;
    display: block;
    width: 100%;
}
#signin-wrapper input.invalid {
  border: 2px solid red;
  }


  #signin-wrapper input.valid{
  border: 2px solid green;
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
  const errors = validatorFormSignin(formData.email, formData.password, formData.confirmPassword);
  document.getElementById('error-email').innerHTML = errors.email || '&nbsp';
  document.getElementById('error-password').innerHTML = errors.password || '&nbsp';
  document.getElementById('error-confirmPassword').innerHTML = errors.confirmPassword || '&nbsp';

  if (errors.email) {
    document.getElementById('input-email').classList.add('invalid');
  } else {
    document.getElementById('input-email').classList.remove('invalid');
  }
  if (errors.password) {
    document.getElementById('input-password').classList.add('invalid');
  } else {
    document.getElementById('input-password').classList.remove('invalid');
  }
  if (errors.confirmPassword) {
    document.getElementById('input-confirm-password').classList.add('invalid');
  } else {
    document.getElementById('input-confirm-password').classList.remove('invalid');
  }

  if (errors.count > 0) {
    return;
  }

  try {
    await signInFirebase(formData.email, formData.password);
  } catch (error) {
    const messageError = document.getElementById('mensajeError');
    const errorEmail = document.getElementById('error-email');

    if (error.code === 'auth/email-already-in-use') {
      errorEmail.innerHTML = 'El correo ya está registrado';
      document.getElementById('input-email').classList.add('invalid');
      document.getElementById('input-password').classList.add('invalid');
      document.getElementById('input-confirm-password').classList.add('invalid');
    } else {
      messageError.innerHTML = 'No se pudo realizar el registro';
      // console.error(`No se pudo hacer registro, code=${error.code}, message=${error.message}`);
    }
    return;
  }

  if (userState().emailVerified === false) {
    try {
      await emailVerification();
    } catch (err) {
      // console.error('manejar error por no poder enviar email', err);
      // return;
    }
  }
  navigateTo('/waitingRoom');
  // al ingresar la cuenta se tiene que actualizar la página para que cuente la validación
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
