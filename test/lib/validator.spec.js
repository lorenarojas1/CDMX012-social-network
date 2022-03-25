import { validatorFormSignin, validatorFormLogin } from '../../src/lib/validator.js';

describe('validatorFormSignin', () => {
  it('regresa errores para campos vacios', () => {
    const errors = validatorFormSignin('', '', '');

    expect(errors.count).toBe(2);
    expect(errors.email).toBe('Ingresa tu correo');
    expect(errors.password).toBe('Ingrese contraseña');
  });

  it('regresa errores para todos los campos', () => {
    const errors = validatorFormSignin('', '', '8');

    expect(errors.count).toBe(3);
  });

  it('regresa error para email', () => {
    const errors = validatorFormSignin('hhkjh', '123456', '123456');

    expect(errors.count).toBe(1);
    expect(errors.email).toBe('Correo inválido');
  });

  it('regresa error para contraseña corta', () => {
    const errors = validatorFormSignin('a@a.com', '12345', '12345');

    expect(errors.count).toBe(1);
    expect(errors.password).toBe('Requiere al menos 6 caracteres');
  });

  it('regresa error por que la contraseña contiene espacio  ', () => {
    const errors = validatorFormSignin('a@a.com', '123 456', '123 456');

    expect(errors.count).toBe(1);
    expect(errors.password).toBe('No puede incluir espacios vacios');
  });

  it('regresa error por que las contraseñas no coinciden', () => {
    const errors = validatorFormSignin('a@a.com', '123456', '123457');

    expect(errors.count).toBe(1);
    expect(errors.confirmPassword).toBe('Las contraseñas no son iguales');
  });
});

describe('validatorLogin', () => {
  it('regresa errores para campos vacios', () => {
    const errors = validatorFormLogin('', '');

    expect(errors.count).toBe(2);
    expect(errors.email).toBe('Ingresa tu correo');
    expect(errors.password).toBe('Ingresa tu contraseña');
  });

  it('regresa error para email', () => {
    const errors = validatorFormLogin('hhkjh', '123456');

    expect(errors.count).toBe(1);
    expect(errors.email).toBe('Correo inválido');
  });

  it('regresa error para contraseña', () => {
    const errors = validatorFormLogin('a@a.com', '12345');

    expect(errors.count).toBe(1);
    expect(errors.password).toBe('Contraseña incorrecta');
  });

  it('regresa error por que la contraseña contiene espacio  ', () => {
    const errors = validatorFormLogin('a@a.com', '123 456');

    expect(errors.count).toBe(1);
    expect(errors.password).toBe('Contraseña incorrecta');
  });
});
