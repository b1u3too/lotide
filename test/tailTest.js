const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TEST CODE
//check that the length is not altered
console.log("Length Test");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//Gentle Case
console.log("GENTLE TEST");
const test1Words = ["Hello", "Lighthouse", "Labs"];
const result1 = tail(test1Words);
assertEqual(result1.length, 2);
assertEqual(result1[0], test1Words[1]);
assertEqual(result1[1], test1Words[2]);

//Empty Array Case
console.log("Empty Array");
const test2Words = [];
const result2 = tail(test2Words);
assertEqual(result2.length, 0);

//Single Element Array
console.log("Single Element");
const test3Words = ["Hello Darkness My Old Friend"];
const result3 = tail(test3Words);
assertEqual(result3.length, 0);