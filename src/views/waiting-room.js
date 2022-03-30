import { userState, waitForAuthLoad } from '../lib/firebase.js';
import { navigateTo } from '../lib/navigator.js';

const view = /* html */ `
<section class="waitingRoom" id="waitingRoom-wrapper">
    <div class="contents">
       <h1>¡Listo! Solo falta un paso</h1>
       <p>Para continuar se requiere una verificación de correo. Por favor revisa tu buzón de correo . El correo fue enviado a:</p>
   
       <p id="email"></p>
       <p id="error-Message"></p>
       <h3>¿Ya?</h3>
       <button id="button-go">Continuar</button>
       <span class="error" id="error-verification">&nbsp;</span>
    </div>
</section>
<style>
    .waitingRoom{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box; 
    }

    .waitingRoom .contents{
    margin: auto;
    width: 30rem;
    max-width: 80%;
    padding: 30px;
    padding-top: 50px;
    margin: 50px;
    text-align: center;
  }
    
   .waitingRoom #button-go{
    width:100%;
    padding: 15px;
    border-radius: 10px;
    background: #74C3FC;
    font-size: 18px;
    color: #070e1f;
    border: solid 2px #36a5f5;
    box-shadow: 0 2px 2px rgba(0 0 0/ 0.15);
   
   }
</style>
`;
// const messageError = document.getElementById('error-Message');

// function emailVerified() {
//   if (userState().emailVerified !== true) {
//     messageError.innerHTML = 'correo no verificado';
//   } else { console.log('error'); }
// }

export default {
  render: () => view,
  afterRender: async () => {
    console.log('afterRender:start');
    await waitForAuthLoad();
    const user = userState();
    console.log('afterRender:user', user);

    const email = document.getElementById('email');
    email.innerHTML = user.email;

    document.getElementById('button-go').addEventListener('click', () => {
      if (user.emailVerified === true) {
        navigateTo('/homeUser');
      } else {
        const messageError = document.getElementById('error-verification');
        messageError.innerHTML = 'Aun no verificas tu correo';
      }
    });
  },

};
