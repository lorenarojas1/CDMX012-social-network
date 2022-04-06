/**
* @jest-environment jsdom
*/

import { navigateTo } from '../../src/lib/navigator.js';
import { validatorFormLogin } from '../../src/lib/validator.js';
import { logInFirebase, userState } from '../../src/lib/firebase.js';
import login from '../../src/views/login.js';

jest.mock('../../src/lib/firebase.js');
jest.mock('../../src/lib/validator.js');
jest.mock('../../src/lib/navigator.js');

describe('Vista login', () => {
  beforeEach(() => {
    // rendereza vist aHTML
    document.body.innerHTML = login.render();
    // iniciar listener de la vista
    login.afterRender();
  });

  describe('al hacer click en enlace signin', () => {
    it('navega hacia vista signin', () => {
      const linkSignin = document.getElementById('signin-link');
      linkSignin.click();

      expect(navigateTo).toHaveBeenCalledWith('/signin');
    });
  });

  describe('al enviar el formulario', () => {
    it('valida los valores del formulario', (done) => {
      const email = 'ahgvjkgh';
      const password = '123456';
      validatorFormLogin.mockReturnValueOnce({ count: 1 });
      document.getElementById('inputEmail').value = email;
      document.getElementById('passwordEmail').value = password;

      document.querySelector('form').dispatchEvent(new Event('submit'));

      expect(validatorFormLogin).toHaveBeenCalledTimes(1);
      expect(validatorFormLogin).toHaveBeenCalledWith(email, password);
      done();
    });

    it('desplegar en vista errores en email', (done) => {
      const emailInput = document.getElementById('inputEmail');
      const emailMessage = document.getElementById('error-email');
      validatorFormLogin.mockReturnValueOnce({ count: 1, email: 'Ingresa tu correo' });

      document.querySelector('form').dispatchEvent(new Event('submit'));

      expect(emailInput.classList).toContain('invalid');
      expect(emailMessage.innerHTML).toBe('Ingresa tu correo');
      done();
    });

    it('desplegar en vista errores en password', (done) => {
      const passwordInput = document.getElementById('passwordEmail');
      const passwordMessage = document.getElementById('error-password');
      validatorFormLogin.mockReturnValueOnce({ count: 1, password: 'Ingresa tu contraseña' });

      document.querySelector('form').dispatchEvent(new Event('submit'));

      expect(passwordInput.classList).toContain('invalid');
      expect(passwordMessage.innerHTML).toBe('Ingresa tu contraseña');
      done();
    });

    it('valida los valores del formulario con firebase', (done) => {
      const email = 'ahgvjkgh';
      const password = '123456';
      const messageError = document.getElementById('mensajeError');
      validatorFormLogin.mockReturnValueOnce({ count: 0 });
      logInFirebase.mockReturnValueOnce(Promise.reject(new Error()));
      document.getElementById('inputEmail').value = email;
      document.getElementById('passwordEmail').value = password;

      document.querySelector('form').dispatchEvent(new Event('submit'));

      setTimeout(() => {
        expect(logInFirebase).toHaveBeenCalledTimes(1);
        expect(logInFirebase).toHaveBeenCalledWith(email, password);
        expect(messageError.innerHTML).toBe('No se pudo inicial  sesión');
        done();
      }, 50);
    });

    it('desplegar en vista, errores de firebase por email', (done) => {
      const emailInput = document.getElementById('inputEmail');
      const passwordInput = document.getElementById('passwordEmail');
      const errorEmail = document.getElementById('error-email');

      const error = new Error();
      error.code = 'auth/user-not-found';

      validatorFormLogin.mockReturnValueOnce({ count: 0 });
      logInFirebase.mockReturnValueOnce(Promise.reject(error));

      document.querySelector('form').dispatchEvent(new Event('submit'));

      setTimeout(() => {
        expect(errorEmail.innerHTML).toBe('El correo no está registrado');
        expect(emailInput.classList && passwordInput.classList).toContain('invalid');
        done();
      }, 10);
    });

    it('desplegar en vista, errores de firebase por contraseña', (done) => {
      const passwordInput = document.getElementById('passwordEmail');
      const errorPassword = document.getElementById('error-password');

      const error = new Error();
      error.code = 'auth/wrong-password';

      validatorFormLogin.mockReturnValueOnce({ count: 0 });
      logInFirebase.mockReturnValueOnce(Promise.reject(error));

      document.querySelector('form').dispatchEvent(new Event('submit'));

      setTimeout(() => {
        expect(errorPassword.innerHTML).toBe('Contraseña incorrecta');
        expect(passwordInput.classList).toContain('invalid');
        done();
      }, 10);
    });

    it('para emailVerified === true navegar al muro principal ', (done) => {
      validatorFormLogin.mockReturnValueOnce({ count: 0 });
      logInFirebase.mockReturnValueOnce(Promise.resolve({}));
      userState.mockReturnValueOnce({ emailVerified: true });

      document.querySelector('form').dispatchEvent(new Event('submit'));

      setTimeout(() => {
        expect(navigateTo).toHaveBeenCalledWith('/homeUser');

        done();
      }, 10);
    });

    it('para emailVerified === false navegar a página de espera ', (done) => {
      validatorFormLogin.mockReturnValueOnce({ count: 0 });
      logInFirebase.mockReturnValueOnce(Promise.resolve({}));
      userState.mockReturnValueOnce({ emailVerified: false });

      document.querySelector('form').dispatchEvent(new Event('submit'));

      setTimeout(() => {
        expect(navigateTo).toHaveBeenCalledWith('/waitingRoom');

        done();
      }, 10);
    });

    // it('para emailVerified === false mostrar mensaje "El correo no está verificado"', (done) => {
    //   const errorEmail = document.getElementById('error-email');
    //   validatorFormLogin.mockReturnValueOnce({ count: 0 });
    //   logInFirebase.mockReturnValueOnce(Promise.resolve({}));
    //   userState.mockReturnValueOnce({ emailVerified: false });

    //   document.querySelector('form').dispatchEvent(new Event('submit'));

    //   setTimeout(() => {
    //     expect(errorEmail.innerHTML).toBe('El correo no está verificado');

    //     done();
    //   }, 10);
    // });
  });
});
