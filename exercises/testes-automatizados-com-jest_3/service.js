const randomNumber = () => Math.floor(Math.random() * 101);

const upperString = str => str.toUpperCase();

const firstLetter = str => str.charAt(0);

const concatStr = ((str1, str2) => str1.concat(str2));

module.exports = { randomNumber, upperString, firstLetter, concatStr };
