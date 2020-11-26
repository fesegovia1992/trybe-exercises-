// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// // implemente seus testes aqui
// assert.strictEqual(sum(4, 5), 9, "Não é igual a 9");
// assert.strictEqual(sum(0, 0), 0, "Não é igual a 0");
// assert.throws(() => {
//     sum(4, '5')
// });
// assert.throws(() => {
//     sum(4, '5');
// },/^Error: parameters must be numbers$/);


// const assert = require('assert');

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (item !== arr[i]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// // implemente seus testes aqui
// assert.strictEqual(typeof myRemove, 'function');
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], "Os arrays não são iguais");
// assert.notStrictEqual(myRemove([1, 2, 3, 4], 3)), [1, 2, 3, 4];
// const myList = [1, 2, 3, 4];
// myRemove(myList,3);

// assert.deepStrictEqual(myList, [1, 2, 3, 4]);
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);


// const assert = require('assert');

// function myRemoveWithoutCopy(arr, item) {
//   for (let i = 0, len = arr.length; i < len; i += 1) {
//     if (arr[i] === item) {
//       arr.splice(i, 1);
//       i -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// // implemente seus testes aqui

// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// const myList = [1, 2, 3, 4];
// myRemoveWithoutCopy(myList, 1);
// assert.strictEqual(myList.length, 3);
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// const assert = require('assert');

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// // implemente seus testes aqui
// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// assert.strictEqual(myFizzBuzz(9), 'fizz');
// assert.strictEqual(myFizzBuzz(10), 'buzz');
// assert.strictEqual(myFizzBuzz(17), 17);
// assert.strictEqual(myFizzBuzz('4'), false);

//const assert = require('assert');

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// // implemente seus testes aqui
// assert.deepStrictEqual((obj1.title),(obj2.title), true);
// assert.deepStrictEqual((obj1),(obj2), true);
// assert.notDeepStrictEqual((obj1),(obj3), true);

////////////////TDD
//Ex 1
// const assert = require('assert');
// // escreva a função addOne aqui
// const addOne = (array) => {
//     const output = [];
//     for (let index = 0; index < array.length; index +=1) {
//         output.push(array[index] +1);
//     }
//     return output;
// };

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);

//Ex 2
// const assert = require('assert');
// // escreva a função wordLengths aqui
// const wordLengths = (words) => {
//     const expected = [];
//     for (let index = 0; index < words.length; index +=1) {
//         expected.push(words[index].length)
//     }
//     return expected;
// }

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

//Ex3
// const assert = require('assert');
// // escreva a função addAllnumbers aqui
// const addAllnumbers = (numbers) => {
//         let sumArray = 0;
//         for(let index = 0; index < numbers.length; index +=1) {
//             sumArray += numbers[index];
//         }
//         return sumArray;
// }

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = addAllnumbers(numbers);

// assert.strictEqual(typeof addAllnumbers, 'function');
// assert.strictEqual(output, expected);

//Ex4
// const assert = require('assert');
// // escreva a função findTheNeedle aqui
// const findTheNeedle = (array, word) => {
//     let output = -1;
//     for (const index in array) {
//       if (word === array[index]) {
//         output = Number(index);
//       }
//     }
//     return output;
//   };

// let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);

// Reescrevendo TDD Ex1
// const assert = require('assert');

// const greetPeople = (people) => {
//     let greeting = [];
  
//     for (const person in people) {
//       greeting.push(`Hello ${people[person]}`);
//     }
//     return greeting;
//   };
//   const parameter = ['Irina', 'Ashleigh', 'Elsa'];
//   const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

//   assert.deepStrictEqual(greetPeople(parameter), result);

//Ex2
const assert = require('assert');

const removeVowels = (word) => {
    const characters = word.split('');
    const results = '';
  
    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        results.push(characters[i]);
      } 
    }
    return results;
  };
  const parameter = 'Dayane';
  const result = 'D1y2n3';

  assert.deepStrictEqual(removeVowels(parameter), result);







