const { TestScheduler } = require('jest');
const {getUserName, findUserById} = require('./ex2');

test('Testa se o usuário é encontrado', () => {
    expect.assertions(1);
    return getUserName(4).then(data => {
        expect(data).toEqual('Mark');
    });
});

test('Testa se o usuário não é encontrado', () => {
    expect.assertions(1);
    const id =  6
    return getUserName(6).catch(error =>{
        expect(error).toEqual({ error: `User with ${id} not found.`})
    })
});

test('Testa com Async/Await', async () => {
    expect.assertions(1);
    const user = await getUserName(5);
    expect(user).toEqual('Paul');
});

test('Testa com Async/Await, o reject', async () => {
    expect.assertions(1);
    try {
        await getUserName(7);
    } catch (error) {0
        expect(error).toEqual({ error: `User with 7 not found.`});
    }
});