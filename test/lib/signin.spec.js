/**
* @jest-environment jsdom
*/
/* eslint-disable no-unused-vars */
/* eslint-disable jest/no-focused-tests */

import { navigateTo } from '../../src/lib/navigator.js';
import { validatorFormSignin } from '../../src/lib/validator.js';
import signin from '../../src/views/signin.js';

jest.mock('../../src/lib/firebase.js', () => ({
  signInFirebase: jest.fn(), userState: jest.fn(), emailVerification: jest.fn(),
}));
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

      setTimeout(() => {
        expect(validatorFormSignin).toHaveBeenCalledTimes(1);
        expect(validatorFormSignin).toHaveBeenCalledWith(email, password, confirmPassword);
        done();
      }, 500);
    });
  });
});
