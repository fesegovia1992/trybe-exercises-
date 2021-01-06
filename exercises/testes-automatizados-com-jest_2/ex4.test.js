const { TestScheduler } = require('jest');
const getRepos = require('./ex4');

test('Testa se existe os repositóios', () => {
    const url ='https://api.github.com/users/tryber/repos';
    return getRepos(url).then(data => {
        expect(data).toContain('exercise-router-fixation');
        expect(data).toContain('exercise-end-block5');
    });

});

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});