import { navigateTo } from '../lib/navigator.js';

const view =/* html */ `
<section id="welcome-wrapper">
  <div class="text-welcome">
    <h1 class="title">Terranova</h1>
    <div class="welcomeParagraph">
      <p>Un espacio que abrirá tu mente hacia una perspectiva sustentable, donde podras compartir tus ideas y experiencias. 
      Así como aprender sobre los temas que más te interesen.</p>
    </div>
  </div>
  <div class="welcomeContent" id="welcomeContent">
    <div class="welcomeButton">
      <button type="button" class="logIn" id="login-button">Iniciar sesión</button>
      <button type="button" class="singIn" id="signin-button">Registrarse</button>
    </div>
  </div>
</section>

<style>
#welcome-wrapper .text-welcome{
  width: 70%;
  margin: 15%;
  background-image: url "/home/jhovanni/Descargas/fondoSustentable 1.png";
}

#welcome-wrapper .welcomeParagraph{
  font-size: 18px;

}
#welcome-wrapper .welcomeContent{
width: 70%;
margin: 15%;

}

#welcome-wrapper .welcomeButton{
display:block;
margin-top: 130px;
 }

 #welcome-wrapper .logIn,
 #welcome-wrapper .singIn{
   width: 100%;
   border-radius: 10px;
   background: #74C3FC;
   font-size: 18px;
   margin-top:15px;
   padding: 10px;
   color: #070e1f;
   border: solid 2px #36a5f5;
}

#welcome-wrapper .logIn:hover,
#welcome-wrapper .singIn:hover{
    background: #22a3ff;
    color: #e3f2fd;
    border: 2px solid #215f8d;
    font-weight: bold;
    cursor: pointer;
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
