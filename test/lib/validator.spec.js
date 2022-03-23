import { validatorForm } from '../../src/lib/validator.js';

describe('validatorForm', () => {
  it('regresa errores para campos vacios', () => {
    const errors = validatorForm('', '', '');

    expect(errors.count).toBe(2);
  });

  it('regresa errores para todos los campos', () => {
    const errors = validatorForm('', '', '8');

    expect(errors.count).toBe(3);
  });

  it('regresa error para email', () => {
    const errors = validatorForm('hhkjh', '123456', '123456');

    expect(errors.count).toBe(1);
    expect(errors.email).toBe('Correo inválido');
  });

  it('regresa error para contraseña corta', () => {
    const errors = validatorForm('a@a.com', '12345', '12345');

    expect(errors.count).toBe(1);
    expect(errors.password).toBe('Requiere al menos 6 caracteres');
  });

  it('regresa error por que la contraseña contiene espacio  ', () => {
    const errors = validatorForm('a@a.com', '123 456', '123 456');

    expect(errors.count).toBe(1);
    expect(errors.password).toBe('No puede incluir espacios vacios');
  });

  it('regresa error por que las contraseñas no coinciden', () => {
    const errors = validatorForm('a@a.com', '123456', '123457');

    expect(errors.count).toBe(1);
    expect(errors.confirmPassword).toBe('Las contraseñas no son iguales');
  });
});
