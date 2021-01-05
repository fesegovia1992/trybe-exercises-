const { test, expect } = require('@jest/globals');
const {encode, decode} = require('./teste-unitariosII');


test('Testa se encode é uma função', () => {
    expect(typeof encode).toEqual('function');
});

test('Testa se decode é uma função', () => {
    expect(typeof decode).toBe('function');
});

test('Se as vogais são convertidas em números', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
});


test('Testa se as demais letras ou números não são convertidos', () => {
    expect(encode('b,c,d,f')).not.toBe('6,7,8,9');
});

test('Testa se a string tem o mesmo tamanho da string que foi passada', () => {
    expect(('trybe').length).toBe(5)
});