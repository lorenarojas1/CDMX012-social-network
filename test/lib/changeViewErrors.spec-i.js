/* eslint-disable max-len */
// /**
//   * @jest-environment jsdom
//   */
// /* eslint-disable jest/no-focused-tests */
// import {
//   changeInputView, errorsFirebaseSignin, changeInputViewLogin, errorsFirebaseLogin,
// } from '../../src/lib/changeViewErrors.js';
// import signin from '../../src/views/signin.js';

// jest.mock('../../src/lib/firebase-import.js');

// // const jsdom = require('jsdom');

// // const { JSDOM } = jsdom;

// describe('changeInputView', () => {
//   it('use jsdom in this test file', () => {
//     const element = document.createElement('div');
//     expect(element).not.toBeNull();
//   });
//   beforeEach(() => {
//     // rendereza vist aHTML
//     document.body.innerHTML = signin.render();
//     // iniciar listener de la vista
//     signin.afterRender();
//   });
//   fit('muestra error de email', () => {
//     // interactuar con el dom para ver cambios
//     const signinButton = document.getElementById('buttonSingIn');
//     signinButton.click();

//     // revisar estado de UI en base a las acciones
//     expect(document.getElementById('input-email').classList.contains('invalid')).toBe(true);
//     expect(document.getElementById('error-email').innerHTML).toBe('Ingresa tu correo');
//   });

//   fit('no muestra error para correo valido', () => {
//     // cambio estado de UI
//     document.getElementById('input-email').value = 'jhovanni@live.com';

//     // interactuar con el dom para ver cambios
//     const signinButton = document.getElementById('buttonSingIn');
//     signinButton.click();

//     // revisar estado de UI en base a las acciones
//     expect(document.getElementById('input-email').classList.contains('invalid')).toBe(false);
//     expect(document.getElementById('error-email').innerHTML).toBe('&nbsp;');
//   });

//   it('deberia regresar true para error en el correo ', () => {
//     document.body.innerHTML = `
//       <input id="input-email" />
//     `;
//     changeInputView({ email: true });
//     const emailElem = document.getElementById('input-email');
//     expect(emailElem.classList.contains('invalid')).toBe(true);
//   });

//   it('deberia regresar true para error en la contraseña ', () => {
//     document.body.innerHTML = `
//       <input id="input-password" />
//     `;
//     changeInputView({ password: true });
//     const passwordElem = document.getElementById('input-password');
//     expect(passwordElem.classList.contains('invalid')).toBe(true);
//   });

//   it('deberia regresar true para error en la confirmación de contraseña ', () => {
//     document.body.innerHTML = `
//       <input id="input-confirm-password" />
//     `;
//     changeInputView({ confirmPassword: true });
//     const confirmPasswordElem = document.getElementById('input-confirm-password');
//     expect(confirmPasswordElem.classList.contains('invalid')).toBe(true);
//   });
// });

// describe('errorsFirebaseSignin', () => {
//   it('deberia regresar mensaje "El correo ya está registrado" para error en email', () => {
//     document.body.innerHTML = `
//         <span class="error" id="error-email">&nbsp;</span>
//         `;
//     errorsFirebaseSignin({ error: 'auth/email-already-in-use' });
//     const errorEmail = document.getElementById('error-email');
//     expect(errorEmail.innerHTML = 'El correo ya está registrado').toBe('El correo ya está registrado');
//   });

//   it('deberia regresar mensaje "No se pudo realizar el registro" para error diferente a email', () => {
//     document.body.innerHTML = `
//     <span class="error" id="mensajeError">&nbsp;</span>
//     `;
//     errorsFirebaseSignin({ error: 'auth/email-already-in-use' });// diferente
//     const messageError = document.getElementById('mensajeError');
//     expect(messageError.innerHTML = 'No se pudo realizar el registro').toBe('No se pudo realizar el registro');
//   });
// });

// describe('changeInputViewLogin', () => {
//   it('deberia regresar true para error en el correo', () => {
//     document.body.innerHTML = `
//       <input id="inputEmail" />
//     `;
//     changeInputViewLogin({ email: true });
//     const emailElem = document.getElementById('inputEmail');

//     expect(emailElem.classList.contains('invalid')).toBe(true);
//   });

//   it('deberia regresar true para error en la contraseña', () => {
//     document.body.innerHTML = `
//       <input id="passwordEmail" />
//     `;
//     changeInputViewLogin({ password: true });
//     const passwordElem = document.getElementById('passwordEmail');

//     expect(passwordElem.classList.contains('invalid')).toBe(true);
//   });
// });

// describe('errorsFirebaseLogin', () => {
//   it('deberia regresar true para error en el correo y mensaje "El correo no está registrado"', () => {
//     document.body.innerHTML = `
//       <span class="error" id="error-email">&nbsp;</span>
//     `;
//     errorsFirebaseLogin({ error: 'auth/user-not-found' });
//     const errorEmail = document.getElementById('error-email');
//     expect(errorEmail.innerHTML = 'El correo no está registrado').toBe('El correo no está registrado');
//   });

//   it('deberia regresar true para error en la contraseña y mensaje "Contraseña incorrecta"', () => {
//     document.body.innerHTML = `
//     <span class="error" id="error-password">&nbsp;</span>
//     `;
//     errorsFirebaseLogin({ error: 'auth/wrong-password' });
//     const errorPassword = document.getElementById('error-password');
//     expect(errorPassword.innerHTML = 'Contraseña incorrecta').toBe('Contraseña incorrecta');
//   });

//   // falta prueba para en caso que el error sea diferente a los dos anteriores
// });

// otros;

// describe('al submit formulario', () => {
//   it('email errors', () => {
//     console.log('kajsdklfjashdkjfhskf');
//     document.querySelector('form').dispatchEvent(new Event('submit'));
//     //   window.HTMLFormElement.prototype.submit = () => {};
//     //   const signinButton = document.getElementById('buttonSingIn');
//     //   signinButton.click();
//   });
//   // it('muestra error de email', () => {
//   // // interactuar con el dom para ver cambios
//   //   const signinButton = document.getElementById('buttonSingIn');
//   //   signinButton.click();

//   //   // revisar estado de UI en base a las acciones
//   //   expect(document.getElementById('input-email').classList.contains('invalid')).toBe(true);
//   //   expect(document.getElementById('error-email').innerHTML).toBe('Ingresa tu correo');
//   // });

//   // it('no muestra error para correo valido', () => {
//   // // cambio estado de UI
//   //   document.getElementById('input-email').value = 'jhovanni@live.com';

//   //   // interactuar con el dom para ver cambios
//   //   const signinButton = document.getElementById('buttonSingIn');
//   //   signinButton.click();

//   //   // revisar estado de UI en base a las acciones
//   //   expect(document.getElementById('input-email').classList.contains('invalid')).toBe(false);
//   //   expect(document.getElementById('error-email').innerHTML).toBe('&nbsp;');
//   // });
// });
