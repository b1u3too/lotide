const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🥳✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑😱🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(message) {
  const letterTallies = {};
  const inputLettersLowerCased = message.toLowerCase().split(' ').join('');

  for (const letter of inputLettersLowerCased) {
    if (letterTallies[letter]) {
      letterTallies[letter]++;
    } else {
      letterTallies[letter] = 1;
    }
  }

  return letterTallies;
};

const testString = "lighthouse in the house";
assertEqual(countLetters(testString).l, 1);
assertEqual(countLetters(testString).i, 2);
assertEqual(countLetters(testString).e, 3);
assertEqual(countLetters(testString).s, 2);
assertEqual(countLetters(testString).u, 2);
assertEqual(countLetters(testString).h, 4);