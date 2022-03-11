import { navigateTo } from '../lib/navigator.js';

const view =/* html */ `
<section id="welcome">
  <h1 class="title">Terranova</h1>
  <div class="welcomeContent" id="welcomeContent">
    <div class="welcomeParagraph">
      <p>Un espacio que abrirá tu mente hacia una perspectiva sustentable</p>
    </div>
    <div class="welcomeButton">
      <button type="button" class="logIn" id="login-button">Iniciar sesión</button>
      <button type="button" class="singIn" id="signin-button">Registrarse</button>
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
.welcomeButton{
  width:80%;
}
</style>
`;

export default {
  render: () => view,
  afterRender: () => {
    document.getElementById('login-button').addEventListener('click', () => navigateTo('/login'));
    document.getElementById('signin-button').addEventListener('click', () => navigateTo('/signin'));
  },
};
