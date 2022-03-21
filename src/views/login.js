import { logInFirebase } from '../lib/firebase.js';
import { navigateTo } from '../lib/navigator.js';

const expRegEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

const view = /* html */ `
<section class="logInSigninEmail" id="login-wrapper">
    <div class="contenido-login">
    <form>
       <div class="input-email">
           <input type='email' class='inputEmail' id='inputEmail' name='email' placeholder='Correo Electrónico'>
       </div>  
           <span class="error" id="error-email">&nbsp;</span>
       <div class="input-password">
           <input type='password' class='inputPasswordEmail' id='passwordEmail' name='password' placeholder='Contraseña'>
       </div>
          <span class="error" id="error-password">&nbsp;</span>
        <p class='questionPassword'>¿Olvidaste tu contraseña?</p>
  
        <div class='buttonLogInEmail'>
           <button type="submit" class='logIn' id='buttonLogIn'>Iniciar sesión</button>
           <span class="error" id="mensajeError">&nbsp;</span>
        </div>
    </form>
        <p class='questionLogIn'>¿No tienes una cuenta?  <em><a href='#' id='signin-link'>Registrate</a></em></p>
        <div id="logInUser"></div>

        <div class="separador">
          <div class='linea-uno'></div>
          <p class='logInWith'>O ingresa con</p>
          <div class='linea-dos'></div>
       </div>
       <img class="img-fluid" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVlJREFUSEvNlYExBEEQRd9lIANEQAbIgAgQwREBIkAGREAGiIDLgAyIgHpqRrUxO7N3Vaeuq7bqamfu/+7+3X8nLDkmS8ZnJQh2gR1gOz1rwEt6roHXVhdaFQh0CRx12ngPHAPvtXtDBGZ7B2yM1MhKTsYSmPnzAPhTArFlOW5bVdYquAEOA8BHArAVMc4Bk6lmni+WBAr6UID7TlEXipLArM4C0gFQZj4XUUnwmEZyqELfe+ezwXIaKy4JnOn19GcFtT1ltMC9ewHYie/4d4KxLYpVOUlbQ7r1RLafVx1VPZ+GO5vRPnpj6vrvNcbUjXesrcJ4Kxe0tmhlRpIomnYQQ4/SqzK4Z3qSi/oTNYLslnma4n0XTsLadM2S2/7KomV2LliNpCaJ4JL+cdSeXduaKGANXLPTj+ay6wikkPtJPH/bQhfSkbbfC39wOtM57nglvsnjUh249QX0WEAZ2ArXmQAAAABJRU5ErkJggg=="/>
    </div>
      </section>

      <style>

    .contenido-login {
    width:100%;
    margin-top: 200px;
   } 

  #login-wrapper .questionPassword,#login-wrapper .questionLogIn{
    margin-top:0px;
    font-size: 15px;
    display: contents;
  }

  #login-wrapper .inputEmail, #login-wrapper .inputPasswordEmail{
    border: 2px solid #ccc;
    border-radius: 10px;
    background: #fff;
    padding: 15px;
    font-size: 18px;
    color: #070e1f;
    box-sizing: border-box ;
    width:100%;

  }   

  #login-wrapper .inputEmail:focus, #login-wrapper .inputPasswordEmail:focus{
    border: 2px solid #949292;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
  }

  #login-wrapper button.logIn{
    width:100%;
    padding: 15px;
    border-radius: 10px;
   background: #74C3FC;
   font-size: 18px;
   color: #070e1f;
   border: solid 2px #36a5f5;
}

  #login-wrapper button.logIn:hover{
    background: #22a3ff;
    color: #e3f2fd;
    border: 2px solid #215f8d;
    font-weight: bold;
    cursor: pointer;
}

#login-wrapper .separador{
  display: flex;
  justify-content: space-between;
}

#login-wrapper .linea-uno, #login-wrapper .linea-dos{
  width: 40%;
  border-top: 1px solid black;
  margin-top: 50px;
  padding:5px;
}

#login-wrapper .logInWith{
width:20%;
padding:5px;
text-align: center;
}
#login-wrapper .img-fluid {
   display: flex;
    justify-content: center;
    margin: 0 auto;
}

#login-wrapper .error {
    color: red;
    margin-top:0px;
    font-size: 15px;
    display: block;
    width: 100%;
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
    messageInput1.innerHTML = 'Correo inválido';
  } else {
    messageInput1.innerHTML = '&nbsp;';
    email = true;
  }
  if (formData.password.length < 6) {
    messageInput2.innerHTML = 'Contraseña incorrecta';
  } else if (formData.password.includes(' ')) {
    messageInput2.innerHTML = 'No puede incluir espacios vacios';
  } else {
    messageInput2.innerHTML = '&nbsp;';
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
    console.warn(`No se pudo iniciar sesión, code=${error.code}, message=${error.message}`);
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
