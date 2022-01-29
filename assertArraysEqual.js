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

assertArraysEqual([1,2,3],[1,2,3]); //true
assertArraysEqual([],[]); //true
assertArraysEqual(['potato', 'tomato', 'asparagus'],['potato', 'tomato', 'asparagus']); //true
assertArraysEqual([],[""]); //false
assertArraysEqual([1,2,3],[3,2,1]); //false
assertArraysEqual(['potato', 'tomato', 'asparagus'],['potato', 'tomato']); //false