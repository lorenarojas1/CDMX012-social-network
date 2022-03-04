export function logInHtml() {
    return `
    <section class="logInEmail">
                <input type="email" class="inputEmail" id="inputEmail" placeholder="Correo Electrónico" </div>
                <input type="password" class="passwordEmail" id="passwordEmail" placeholder="Contraseña">
                <div class="helpPassword">
                    <label><input type="checkbox" class="checkboxRememberPass" id="checkboxRememberPass" value="rememberPassword">Guardar contraseña</label>
                    <p class="questionPassword">¿Olvidaste tu contraseña?</p>
                </div>
                <button type="button" class="logIn" id="buttonLogIn">Iniciar sesión</button>
                <p class="questionLogIn">¿No tienes una cuenta?</p>
                <p>Registrate</p>
                <div class="linea"></div>
                <p class="logInWith">O ingresa con</p>
            </section>
    `;
};

export function singInHtml() {
    return `
    <section class="singInEmail">
        <input type="email" class="inputEmail" id="inputEmail" placeholder="Correo Electrónico" </div>
        <input type="password" class="passwordEmail" id="passwordEmail" placeholder="Contraseña">
        <input type="password" class="confirmPasswordEmail" id="confirmPasswordEmail" placeholder="Confirmar Contraseña">
          <div class="privacyTerms">
          <label><input type="checkbox" class="checkboxPrivacyTerms" id="checkboxPrivacyTerms" value="acceptPrivacyTerms">Estoy de acuerdo con los términos de privacidada</label>
          </div>
        <button type="button" class="singIn" id="buttonSingIn">Registrarse</button>
          <p class="questionSingIn">¿Tienes una cuenta?</p>
          <p>Inicia sesión</p>
        <div class="linea"></div>
          <p class="signInWith">O registrate con</p>
    </section>

`;
};

// window.customElements.define(my - first - CompositionEvent, MyFirstComponent);