import { userState, logout } from '../lib/firebase.js';
import { navigateTo } from '../lib/navigator.js';

const view =/* html */ `
<section id="home">
  <h1 class="title">Terranova</h1>
  <div class="welcomeContent" id="welcomeContent">
     <div class="buttonCloseAndLogin">
          <button type="button" class="close" id="close-button">Cerrar sesión</button>
          <button type="button" class="logIn" id="logIn-button">Inicia sesión</button>
     </div>
  <div id="logInUser"></div>
    <div class="welcomeParagraph">
        <p>Proximamente</p>
  </div>
  </div>
</section>

<style>
section{
  display: block;
  width:100%;
}
.title{
}

p{
    text-align: center;
}
</style>
`;

async function signout() {
  await logout();
  navigateTo('/');
}

export default {
  render: () => view,
  afterRender: () => {
    if (userState() !== undefined) {
      document.getElementById('logInUser').innerHTML = (`Logueado ${userState().email}`);
    } else {
      document.getElementById('logInUser').innerHTML = ('No logueado');
    }
    document.getElementById('close-button').addEventListener('click', signout);
  },
};
