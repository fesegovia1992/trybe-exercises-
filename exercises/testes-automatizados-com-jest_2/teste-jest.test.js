const { TestScheduler } = require('jest')
const uppercase = require('./teste-jest')

test('Retorna se a função transforma uma palavra em letras maiúsculas', done => {
    uppercase('str', (result) => {
        expect(result).toBe('STR');
        done();
    });
});