// __tests__/ePalindromo.test.js
const ePalindromo = require('./ePalindromo');

test('retorna true para "arara"', () => {
  expect(ePalindromo('arara')).toBe(true);
});

test('retorna false para "casa"', () => {
  expect(ePalindromo('casa')).toBe(false);
});

test('retorna true para "A man a plan a canal Panama"', () => {
  expect(ePalindromo('A man a plan a canal Panama')).toBe(true);
});

test('retorna true para "ovo"', () => {
  expect(ePalindromo('ovo')).toBe(true);
});

test('retorna false para "javascript"', () => {
  expect(ePalindromo('javascript')).toBe(false);
});
