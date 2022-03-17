import { userState, logout } from '../lib/firebase.js';
import { navigateTo } from '../lib/navigator.js';

const view =/* html */ `
<section class='home-wrapper' id="home">
  <h1 class="title">Terranova</h1>
  <div class="welcomeContent" id="welcomeContent">
     <div class="container-button">
          <button type="button" class="button-close" id="button-signOut">Cerrar sesión</button>
          <div id="logInUser"></div>
     </div>
    <div class="welcome-paragraph">
        <p>Proximamente</p>
  </div>
  </div>
</section>

<style>
.home-wrapper{
  display: block;
  width:100%;
}

.title{
}
.home-wrapper .container-button{
  <!-- display: flex; -->
}

.home-wrapper #button-signOut {
    width:20%;
    width: max-content;
    padding: 15px;
    border-radius: 10px;
    background: #74C3FC;
    font-size: 18px;
    color: #070e1f;
    border: solid 2px #36a5f5;

}

.home-wrapper #button-signOut:hover {
  background: #22a3ff;
    color: #e3f2fd;
    border: 2px solid #215f8d;
    font-weight: bold;
    cursor: pointer;
}

div #logInUser{
    font-size: 20px;
    display: flex;
    align-items: center;
    margin: 10px;
}

.welcome-paragraph p {
    text-align: center;
    margin-top: 100px;
    font-size: xxx-large;
}

</style>
`;

async function signout() {
  try {
    await logout();
  } catch (error) {
    console.error(`No se pudo cerrar sesión, code=${error.code}, message=${error.message}`);
    // el usuario ya existe(personalizar los errores con firebase)
  }

  navigateTo('/');
}
let mensajeEmailVerificado;
function mensaje() {
  if (userState().emailVerified === false) {
    mensajeEmailVerificado = 'Email no verificado';
  } else {
    mensajeEmailVerificado = 'Email verificado';
  }
  return mensajeEmailVerificado;
}

export default {
  render: () => view,
  afterRender: () => {
    if (userState() !== undefined) {
      document.getElementById('logInUser').innerHTML = (`Logueado ${userState().email} ${mensaje()}`);
    } else {
      document.getElementById('logInUser').innerHTML = ('No logueado');
    }
    document.getElementById('button-signOut').addEventListener('click', signout);
  },
};
