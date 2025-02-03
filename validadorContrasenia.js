// passwordValidator.js
function validatePassword(password) {
  const minLength = /.{8,}/;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasNumber = /[0-9]/;
  const hasSpecialChar = /[!@#$%^&*()_+{}|:<>?]/;

  return (
    // La contraseña tiene una longitud mínima de 8 caracteres
    minLength.test(password) &&
    // La contraseña tiene, al menos, una letra en mayúsculas
    hasUpperCase.test(password) &&
    // La contraseña tiene, al menos, una letra en mínusculas
    hasLowerCase.test(password) &&
    // La contraseña tiene, al menos, un número
    hasNumber.test(password) &&
    // La contraseña, al menos, un caracter especial
    hasSpecialChar.test(password)
  );
}

module.exports = { validatePassword };
