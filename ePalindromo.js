// ePalindromo.js

function ePalindromo(str) {
    const normalizado = str.toLowerCase().replace(/[\W_]/g, '');
    const invertido = normalizado.split('').reverse().join('');
    return normalizado === invertido;
  }
  
  module.exports = ePalindromo;
  