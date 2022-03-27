export function changeInputView(errors) {
  document.getElementById('error-email').innerHTML = errors.email || '&nbsp';
  document.getElementById('error-password').innerHTML = errors.password || '&nbsp';
  document.getElementById('error-confirmPassword').innerHTML = errors.confirmPassword || '&nbsp';

  if (errors.email) {
    document.getElementById('input-email').classList.add('invalid');
  } else {
    document.getElementById('input-email').classList.remove('invalid');
  }
  if (errors.password) {
    document.getElementById('input-password').classList.add('invalid');
  } else {
    document.getElementById('input-password').classList.remove('invalid');
  }
  if (errors.confirmPassword) {
    document.getElementById('input-confirm-password').classList.add('invalid');
  } else {
    document.getElementById('input-confirm-password').classList.remove('invalid');
  }
}

export function errorsFirebaseSignin(error) {
  const messageError = document.getElementById('mensajeError');
  const errorEmail = document.getElementById('error-email');

  if (error.code === 'auth/email-already-in-use') {
    errorEmail.innerHTML = 'El correo ya está registrado';
    document.getElementById('input-email').classList.add('invalid');
    document.getElementById('input-password').classList.add('invalid');
    document.getElementById('input-confirm-password').classList.add('invalid');
  } else { messageError.innerHTML = 'No se pudo realizar el registro'; }
}

export function changeInputViewLogin(errors) {
  document.getElementById('error-email').innerHTML = errors.email || '&nbsp';
  document.getElementById('error-password').innerHTML = errors.password || '&nbsp';

  if (errors.email) {
    document.getElementById('inputEmail').classList.add('invalid');
  } else {
    document.getElementById('inputEmail').classList.remove('invalid');
  }
  if (errors.password) {
    document.getElementById('passwordEmail').classList.add('invalid');
  } else {
    document.getElementById('passwordEmail').classList.remove('invalid');
  }
}

export function errorsFirebaseLogin(error) {
  const messageError = document.getElementById('mensajeError');
  const errorPass = document.getElementById('error-password');
  const errorEmail = document.getElementById('error-email');

  if (error.code === 'auth/user-not-found') {
    document.getElementById('inputEmail').classList.add('invalid');
    errorEmail.innerHTML = 'El correo no está registrado' || '&nbsp';
    document.getElementById('passwordEmail').classList.add('invalid');
  } else if (error.code === 'auth/wrong-password') {
    document.getElementById('passwordEmail').classList.add('invalid');
    errorPass.innerHTML = 'Contraseña incorrecta';
  } else {
    messageError.innerHTML = 'No se pudo inicial  sesión';
    // cuando son varios intentos fallidos por entrar a la cuenta,
    // firebase marca error y bloquea temporalmente la cuenta
  }
}
