export function logInHtml() {
  return /* html */ `

   
    <section class="logInEmail">
      <input type="email" class="inputEmail" id="inputEmail" placeholder="Correo Electrónico">
      <input type="password" class="inputPasswordEmail" id="passwordEmail" placeholder="Contraseña">
      <p class="questionPassword">¿Olvidaste tu contraseña?</p>
      <button type="button" class="logIn" id="buttonLogIn">Iniciar sesión</button>
      <p class="questionLogIn">¿No tienes una cuenta?  <a href="#">Registrate</a></p>
      <div class="linea"></div>
      <p class="logInWith">O ingresa con</p>
    </section>
    `;
}

export function singInHtml() {
  return /* html */ `

    
      <section class="singInEmail">
      <input type="email" class="inputEmail" id="inputEmail" placeholder="Correo Electrónico">
      <input type="password" class="inputPasswordEmail" id="passwordEmail" placeholder="Contraseña">
      <input type="password" class="inputConfirmPasswordEmail" id="confirmPasswordEmail" placeholder="Confirmar Contraseña">
      <div class="privacyTerms">
        <label>
          <input type="checkbox" class="checkboxPrivacyTerms" id="checkboxPrivacyTerms" value="acceptPrivacyTerms">
          Estoy de acuerdo con los términos de privacidada
        </label>
      </div>
      <button type="button" class="singIn" id="buttonSingIn">Registrarse</button>
      <p class="questionSingIn">¿Tienes una cuenta?</p>
      <p>Inicia sesión</p>
      <div class="linea"></div>
      <p class="signInWith">O registrate con</p>
    </section>

`;
}