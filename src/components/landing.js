const template = document.createElement('template');
template.innerHTML = /* html */ `
<section id="welcome">
  <h1 class="title">Terranova</h1>
  <div class="welcomeContent" id="welcomeContent">
    <div class="welcomeParagraph">
      <p>Un espacio que abrirá tu mente hacia una perspectiva sustentable</p>
    </div>
    <section class="welcomeButton">
      <button type="button" class="logIn" id="login-button">Iniciar sesión</button>
      <button type="button" class="singIn" id="signin-button">Registrarse</button>
    </section>
  </div>
</section>
<section id="signin">
  <form>
       <div class='inputEmail'  id='inputEmailContent'>
          <input type="email" class="inputEmail" name='email' id="inputEmail" placeholder="Correo Electrónico">
          <span class="error" id="error-email"></span>
       </div>
       <div class='inputEmail' id='inputPassEmailContent' >
          <input type="password" class="inputPasswordEmail" name='password' id="passwordEmail" placeholder="Contraseña">
          <span class="error" id="error-password"></span>
       </div>
       <div class='inputEmail' id='inputConfirmPassContent'>
          <input type="password" class="inputConfirmPasswordEmail" name='confirmPassword' id="confirmPasswordEmail" placeholder="Confirmar Contraseña">
       </div>
       <div class='privacyTerms'>
          <label>
            <input type="checkbox" class="checkboxPrivacyTerms" id="checkboxPrivacyTerms" value="acceptPrivacyTerms">
             Estoy de acuerdo con los términos de privacidada
          </label>
       </div>
       <div class='buttonEmail' id='buttonSingInEmailContent'
          <button type="submit" class="singIn" id="buttonSingIn">Registrarse</button>
    </form>
    <p class="questionSingIn" id='linkLogIn'>¿Tienes una cuenta? <a href="#" id="login-link">Inicia sesión</a></p>
    <div class="linea"></div>
    <p class="signInWith">O registrate con</p>
</section>
<section id="login">
      <div class='inputLogInEmail'>
         <input type='email' class='inputEmail' id='inputEmail' placeholder='Correo Electrónico'>
         <input type='password' class='inputPasswordEmail' id='passwordEmail' placeholder='Contraseña'>
      </div>
      <p class='questionPassword'>¿Olvidaste tu contraseña?</p>

      <div class='buttonLogInEmail'>
         <button type='button' class='logIn' id='buttonLogIn'>Iniciar sesión</button>
      </div>
      <p class='questionLogIn' id='linkSingIn'>¿No tienes una cuenta?  <a  href='#' id="signin-link">Registrate</a></p>
      <div class='linea'></div>
      <p class='logInWith'>O ingresa con</p>
    </section>
<style>
#signin, #login {
    display: none;
}
</style>
`;

export class Landing extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));

    this.welcomeView = this.shadow.querySelector('#welcome');
    this.signinView = this.shadow.querySelector('#signin');
    this.loginView = this.shadow.querySelector('#login');

    this.signinButton = this.shadow.querySelector('#signin-button');
    this.loginButton = this.shadow.querySelector('#login-button');
    this.loginLink = this.shadow.querySelector('#login-link');
    this.signinLink = this.shadow.querySelector('#signin-link');
  }

  connectedCallback() {
    this.signinButton.addEventListener('click', () => this.changeView('signin'));
    this.loginButton.addEventListener('click', () => this.changeView('login'));
    this.loginLink.addEventListener('click', () => this.changeView('login'));
    this.signinLink.addEventListener('click', () => this.changeView('signin'));
  }

  changeView(view) {
    this.welcomeView.style.display = 'none';
    this.signinView.style.display = 'none';
    this.loginView.style.display = 'none';

    if (view === 'welcome') {
      this.welcomeView.style.display = 'initial';
    } else if (view === 'login') {
      this.loginView.style.display = 'initial';
    } else if (view === 'signin') {
      this.signinView.style.display = 'initial';
    }
  }
}

customElements.define('app-landing', Landing);
