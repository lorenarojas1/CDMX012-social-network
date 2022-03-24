import { signInFirebase, logInFirebase } from '../../src/lib/firebase.js';
// import { createUserWithEmailAndPassword } from '../../src/lib/__mocks__/firebase.js';

jest.mock('../../src/lib/firebase.js');

describe('signInFirebase', () => {
  // eslint-disable-next-line jest/no-focused-tests
  it('deberia regresar usuario', async () => {
    const resultado = await signInFirebase('q@q.com', '123456');
    expect(resultado).toStrictEqual({});
  });
});

describe('logInFirebase', () => {
  it('deberia ingresar con su cuenta', async () => {
    const resultado = await logInFirebase('q@q.com', '123456');
    expect(resultado).toStrictEqual({});
  });
});
