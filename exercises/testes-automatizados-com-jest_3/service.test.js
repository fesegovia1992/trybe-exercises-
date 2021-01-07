const service = require('./service');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  
  expect(service.randomNumber(10)).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);  
});

test('Testando a implementação de uma nova função com 2 parâmetros, o primeiro dividido pelo segundo', () => {
    service.randomNumber = jest.fn().mockImplementation((num1, num2) => num1 / num2).mockReturnValueOnce(5);

    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

test('Testa a implementação com 3 parâmetros, retonando o valor, restaura e implementa uma nova função com 2 parâmetros, retornando o dobro ', () => {
    service.randomNumber = jest.fn().mockImplementation((num1, num2, num3) => num1 * num2 * num3);

    expect(service.randomNumber(2, 2, 2)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);

    service.randomNumber.mockRestore();
    service.randomNumber = jest.fn().mockImplementation((num1) => num1 * 2);

    expect(service.randomNumber(7)).toBe(14);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    
});

test('Testa invertendo todas as funções, exceto a ultima que adiciona mais um parâmetro', () => {
    service.upperString = jest.fn().mockImplementation(str => str.toLowerCase());

    expect(service.upperString('TRYBE')).toBe('trybe');
    expect(service.upperString).toHaveBeenCalled();
    expect(service.upperString).toHaveBeenCalledTimes(1);

    service.firstLetter = jest.fn().mockImplementation(str => str.charAt(str.length-1));

    expect(service.firstLetter('Trybe')).toBe('e');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);

    service.concatStr = jest.fn().mockImplementation((str1, str2, str3) => str1.concat(str2).concat(str3));

    expect(service.concatStr('o','l','a')).toBe('ola');
    expect(service.concatStr).toHaveBeenCalled();
    expect(service.concatStr).toHaveBeenCalledTimes(1);
});

// exports.randomRGBColor = function() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
//     }
//     exports.randomNumber = function() {
//     return Math.floor(Math.random() * 101);
//     }
//     exports.isDivisible = function(number) {
//     return (exports.randomNumber() % number === 0);
//     } 