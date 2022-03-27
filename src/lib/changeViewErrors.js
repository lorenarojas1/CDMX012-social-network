export function changeInputView(errors) {
  document.getElementById('error-email').innerHTML = errors.email || '&nbsp';
  document.getElementById('error-password').innerHTML = errors.password || '&nbsp';
  document.getElementById('error-confirmPassword').innerHTML = errors.confirmPassword || '&nbsp';

  if (errors.email) {
    document.getElementById('input-email').classList.add('invalid');
  } else {
    document.getElementById('input-email').classList.add('valid');
  }
  if (errors.password) {
    document.getElementById('input-password').classList.add('invalid');
  } else {
    document.getElementById('input-password').classList.add('valid');
  }
  if (errors.confirmPassword) {
    document.getElementById('input-confirm-password').classList.add('invalid');
  } else {
    document.getElementById('input-confirm-password').classList.add('valid');
  }
}

export function changeInputViewLogin(errors) {
  document.getElementById('error-email').innerHTML = errors.email || '&nbsp';
  document.getElementById('error-password').innerHTML = errors.password || '&nbsp';

  if (errors.email) {
    document.getElementById('inputEmail').classList.add('invalid');
  } else {
    document.getElementById('inputEmail').classList.add('valid');
  }

  if (errors.password) {
    document.getElementById('passwordEmail').classList.add('invalid');
  } else {
    document.getElementById('passwordEmail').classList.add('valid');
  }
}
