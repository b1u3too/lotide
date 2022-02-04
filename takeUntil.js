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

const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
  return array;
};

assertArraysEqual(takeUntil([1,6,5,1,3,4], num => num % 5 === 0),[1,6]);
assertArraysEqual(takeUntil(['a','b','c','d','e','g','f', 'lighthouse'], str => str.includes('h')),['a','b','c','d','e','g','f']);