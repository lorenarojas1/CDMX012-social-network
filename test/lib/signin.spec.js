/**
* @jest-environment jsdom
*/
/* eslint-disable no-unused-vars */
/* eslint-disable jest/no-focused-tests */

import { navigateTo } from '../../src/lib/navigator.js';
import { validatorFormSignin } from '../../src/lib/validator.js';
import { signInFirebase } from '../../src/lib/firebase.js';
import signin from '../../src/views/signin.js';

jest.mock('../../src/lib/firebase.js');
jest.mock('../../src/lib/validator.js');
jest.mock('../../src/lib/navigator.js');

describe('Vista signin', () => {
  beforeEach(() => {
    // rendereza vist aHTML
    document.body.innerHTML = signin.render();
    // iniciar listener de la vista
    signin.afterRender();
  });

  describe('al hacer click en enlace login', () => {
    it('navega hacia vista login', () => {
      const linkLogin = document.getElementById('login-link');
      linkLogin.click();

      expect(navigateTo).toHaveBeenCalledWith('/login');
    });
  });

  describe('al enviar el formulario', () => {
    it('valida los valores del formulario', (done) => {
      const email = 'ahgvjkgh';
      const password = '123456';
      const confirmPassword = '123457';
      validatorFormSignin.mockReturnValueOnce({ count: 1 });
      document.getElementById('input-email').value = email;
      document.getElementById('input-password').value = password;
      document.getElementById('input-confirm-password').value = confirmPassword;

      // TODO: como probr cosas asincronas
      document.querySelector('form').dispatchEvent(new Event('submit'));

      expect(validatorFormSignin).toHaveBeenCalledTimes(1);
      expect(validatorFormSignin).toHaveBeenCalledWith(email, password, confirmPassword);
      done();
    });

    it('desplegar en vista errores en email', (done) => {
      const emailInput = document.getElementById('input-email');
      const emailMessage = document.getElementById('error-email');
      validatorFormSignin.mockReturnValueOnce({ count: 1, email: 'Ingresa tu correo' });

      document.querySelector('form').dispatchEvent(new Event('submit'));

      expect(emailInput.classList).toContain('invalid');
      expect(emailMessage.innerHTML).toBe('Ingresa tu correo');
      done();
    });

    it('desplegar en vista errores en password', (done) => {
      const passwordInput = document.getElementById('input-password');
      const passwordMessage = document.getElementById('error-password');
      validatorFormSignin.mockReturnValueOnce({ count: 1, password: 'Ingrese contraseña' });

      document.querySelector('form').dispatchEvent(new Event('submit'));

      expect(passwordInput.classList).toContain('invalid');
      expect(passwordMessage.innerHTML).toBe('Ingrese contraseña');
      done();
    });

    it('desplegar en vista errores en confirmpassword', (done) => {
      const confirmPasswordInput = document.getElementById('input-confirm-password');
      const confirmPasswordMessage = document.getElementById('error-confirmPassword');
      validatorFormSignin.mockReturnValueOnce({ count: 1, confirmPassword: 'Las contraseñas no son iguales' });

      document.querySelector('form').dispatchEvent(new Event('submit'));

      expect(confirmPasswordInput.classList).toContain('invalid');
      expect(confirmPasswordMessage.innerHTML).toBe('Las contraseñas no son iguales');
      done();
    });

    it('valida los valores del formulario con firebase', (done) => {
      const email = 'ahgvjkgh';
      const password = '123456';
      validatorFormSignin.mockReturnValueOnce({ count: 0 });
      signInFirebase.mockReturnValueOnce(Promise.reject(new Error()));
      document.getElementById('input-email').value = email;
      document.getElementById('input-password').value = password;

      document.querySelector('form').dispatchEvent(new Event('submit'));

      expect(signInFirebase).toHaveBeenCalledTimes(1);
      expect(signInFirebase).toHaveBeenCalledWith(email, password);
      done();
    });

    it('desplegar en vista errores de firebase por email', (done) => {
      const emailInput = document.getElementById('input-email');
      const passwordInput = document.getElementById('input-password');
      const confirmPasswordInput = document.getElementById('input-confirm-password');
      const errorEmail = document.getElementById('error-email');

      const error = new Error();
      error.code = 'auth/email-already-in-use';

      validatorFormSignin.mockReturnValueOnce({ count: 0 });
      signInFirebase.mockReturnValueOnce(Promise.reject(error));

      document.querySelector('form').dispatchEvent(new Event('submit'));

      setTimeout(() => {
        expect(errorEmail.innerHTML).toBe('El correo ya está registrado');
        expect(emailInput.classList && passwordInput.classList && confirmPasswordInput.classList).toContain('invalid');
        done();
      }, 10);
    });
  });
});
