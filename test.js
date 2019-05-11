const {strictEqual} = require('assert');
const syllables = require('./index.js');

strictEqual(syllables('hello'), 2);
strictEqual(syllables('Hello'), 2);
strictEqual(syllables('Hi, how are you?'), 4);
strictEqual(syllables('Notawordinthedictionary'), 0);
strictEqual(syllables('A made up word oapissjoa'), 4);
strictEqual(syllables(''), 0);
strictEqual(syllables('Symbols ,    ! *1@981 9'), 2);
strictEqual(syllables("i'm i isn't very cool"), 7);

console.log('All tests passed');
