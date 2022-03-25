// eslint-disable-next-line no-useless-escape
const expRegEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

export function validatorFormSignin(email, password, confirmPassword) {
  const errors = { count: 0 };

  if (email === '') {
    errors.email = 'Ingresa tu correo';
    errors.count += 1;
  } else if ((expRegEmail.test(email)) !== true) {
    errors.email = 'Correo inválido';
    errors.count += 1;
  }

  if (password === '') {
    errors.password = 'Ingrese contraseña';
    errors.count += 1;
  } else if (password.length < 6) {
    errors.password = 'Requiere al menos 6 caracteres';
    errors.count += 1;
  } else if (password.includes(' ')) {
    errors.password = 'No puede incluir espacios vacios';
    errors.count += 1;
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no son iguales';
    errors.count += 1;
  } else if (confirmPassword === '') {
    errors.confirmPassword = 'Ingrese contraseña';
    errors.count += 1;
  }
  return errors;
}

export function validatorFormLogin(email, password) {
  const errors = { count: 0 };

  if (email === '') {
    errors.email = 'Ingresa tu correo';
    errors.count += 1;
  } else if ((expRegEmail.test(email)) !== true) {
    errors.email = 'Correo inválido';
    errors.count += 1;
  }

  if (password === '') {
    errors.password = 'Ingresa tu contraseña';
    errors.count += 1;
  } else if (password.length < 6) {
    errors.password = 'Contraseña incorrecta';
    errors.count += 1;
  } else if (password.includes(' ')) {
    errors.password = 'Contraseña incorrecta';
    errors.count += 1;
  }
  return errors;
}
