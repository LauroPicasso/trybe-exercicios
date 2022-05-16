const { describe } = require('yargs');
const sum = require('./sum.js');

describe('TESTES DA FUNÇÃO sum', () => {
  test('Deve retornar a soma de 4 e 5', () => {
    expect(sum(4, 5)).toBe(9);
  })
  
  test('Deve retornar a soma de 0 e 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  
  test('Caso parâmetro receba uma string, retorne erro', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})

describe('TESTES DA FUNÇÃO myRemove', () => {
  test('Deve retornar o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toBe([1, 2, 3, 4])
  })



})