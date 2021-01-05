const { expect, test } = require('@jest/globals');
const sum = require('./teste-unitarios');

test('Testa se a funcao soma a e b', () => {
    expect('function').toBe(typeof sum);
});

test('Testa se 4 + 5 é igual a 9', () => {
    expect(9).toBe(sum(4,5));
});

test('Testa se a soma de zero mais zero é igual a zero', () => {
    expect(0).toBe(sum(0,0))
});

test('Testa se lança um erro quando é passado um numero e uma string', () => {
    expect(() => {sum(4,'5') }).toThrow();
});

test('testa se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => { sum() }).toThrowError(new Error('parameters must be numbers'));
  });