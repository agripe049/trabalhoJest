const calculadora = require('../calculadora');

test('realiza soma corretamente', () => {
    expect(calculadora(10, 5, 'soma')).toBe(15);
  });
  
  test('realiza subtração corretamente', () => {
    expect(calculadora(10, 5, 'subtracao')).toBe(5);
  });
  
  test('realiza multiplicação corretamente', () => {
    expect(calculadora(10, 5, 'multiplicacao')).toBe(50);
  });
  
  test('realiza divisão corretamente', () => {
    expect(calculadora(10, 5, 'divisao')).toBe(2);
  });
  
    test('retorna 0 ao tentar dividir por zero', () => {
        expect(calculadora(10, 0, 'divisao')).toBe(0);
    });
  
  test('retorna erro para operação inválida', () => {
    expect(calculadora(10, 5, 'modulo')).toBe('Operação inválida');
  });