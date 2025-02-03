const { validatePassword } = require('./validadorContrasenia');

test('La contraseña hola devuelve false', () => {
    expect(validatePassword('hola')).toBe(false);
});

test('La contraseña Hola devuelve false', () => {
    expect(validatePassword('Hola')).toBe(false);
});

test('La contraseña Hola99 devuelve false', () => {
    expect(validatePassword('Hola99')).toBe(false);
});

test('La contraseña Hola99** devuelve true', () => {
    expect(validatePassword('Hola99**')).toBe(true);
});
