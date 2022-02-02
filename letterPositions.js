const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅🥳✅ Assertion Passed: [${firstArray}] matches [${secondArray}]`);
  } else {
    console.log(`🛑😱🛑 Assertion Failed: [${firstArray}] DOES NOT match [${secondArray}]`);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  [...sentence].forEach((letter, index) => {
    if (results[letter]) {
      results[letter].push(index);
    } else {
      results[letter] = [index];
    }
  });

  delete results[' '];

  return results;
};


//TEST CODE
const testString = "trying something longer";

assertArraysEqual(letterPositions(testString).t, [0,11]);
assertArraysEqual(letterPositions(testString).g, [5,15,20]);
assertArraysEqual(letterPositions(testString).l, [17]);
assertArraysEqual(letterPositions(testString).o, [8,18]);