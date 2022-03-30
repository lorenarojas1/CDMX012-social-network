import {
  changeInputView, errorsFirebaseSignin, changeInputViewLogin, errorsFirebaseLogin,
} from '../../src/lib/changeViewErrors.js';

jest.mock('../../src/lib/firebase-import.js');

/**
 * @jest-environment jsdom
 */

describe('changeInputView', () => {
  it('deberia regresar true para error en el correo ', () => {
    document.body.innerHTML = `
      <input id="input-email" />
    `;
    changeInputView({ email: true });
    const emailElem = document.getElementById('input-email');
    expect(emailElem.classList.contains('invalid')).toBe(true);
  });

  it('deberia regresar true para error en la contraseña ', () => {
    document.body.innerHTML = `
      <input id="input-password" />
    `;
    changeInputView({ password: true });
    const passwordElem = document.getElementById('input-password');
    expect(passwordElem.classList.contains('invalid')).toBe(true);
  });

  it('deberia regresar true para error en la confirmación de contraseña ', () => {
    document.body.innerHTML = `
      <input id="input-confirm-password" />
    `;
    changeInputView({ confirmPassword: true });
    const confirmPasswordElem = document.getElementById('input-confirm-password');
    expect(confirmPasswordElem.classList.contains('invalid')).toBe(true);
  });
});

describe('errorsFirebaseSignin', () => {
  it('deberia regresar mensaje "El correo ya está registrado" para error en email', () => {
    document.body.innerHTML = `
        <span class="error" id="error-email">&nbsp;</span>
        `;
    errorsFirebaseSignin({ error: 'auth/email-already-in-use' });
    const errorEmail = document.getElementById('error-email');
    expect(errorEmail.innerHTML = 'El correo ya está registrado').toBe('El correo ya está registrado');
  });

  it('deberia regresar mensaje "No se pudo realizar el registro" para error diferente a email', () => {
    document.body.innerHTML = `
    <span class="error" id="mensajeError">&nbsp;</span>
    `;
    errorsFirebaseSignin({ error: 'auth/email-already-in-use' });// diferente
    const messageError = document.getElementById('mensajeError');
    expect(messageError.innerHTML = 'No se pudo realizar el registro').toBe('No se pudo realizar el registro');
  });
});

describe('changeInputViewLogin', () => {
  it('deberia regresar true para error en el correo', () => {
    document.body.innerHTML = `
      <input id="inputEmail" />
    `;
    changeInputViewLogin({ email: true });
    const emailElem = document.getElementById('inputEmail');

    expect(emailElem.classList.contains('invalid')).toBe(true);
  });

  it('deberia regresar true para error en la contraseña', () => {
    document.body.innerHTML = `
      <input id="passwordEmail" />
    `;
    changeInputViewLogin({ password: true });
    const passwordElem = document.getElementById('passwordEmail');

    expect(passwordElem.classList.contains('invalid')).toBe(true);
  });
});

describe('errorsFirebaseLogin', () => {
  it('deberia regresar true para error en el correo y mensaje "El correo no está registrado"', () => {
    document.body.innerHTML = `
      <span class="error" id="error-email">&nbsp;</span>
    `;
    errorsFirebaseLogin({ error: 'auth/user-not-found' });
    const errorEmail = document.getElementById('error-email');
    expect(errorEmail.innerHTML = 'El correo no está registrado').toBe('El correo no está registrado');
  });

  it('deberia regresar true para error en la contraseña y mensaje "Contraseña incorrecta"', () => {
    document.body.innerHTML = `
    <span class="error" id="error-password">&nbsp;</span>
    `;
    errorsFirebaseLogin({ error: 'auth/wrong-password' });
    const errorPassword = document.getElementById('error-password');
    expect(errorPassword.innerHTML = 'Contraseña incorrecta').toBe('Contraseña incorrecta');
  });

  // falta prueba para en caso que el error sea diferente a los dos anteriores
});
