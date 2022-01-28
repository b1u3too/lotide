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

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([],[]);
assertArraysEqual([],[""]);
assertArraysEqual([1,2,3],[3,2,1]);
assertArraysEqual(['potato', 'tomato', 'asparagus'],['potato', 'tomato']);
assertArraysEqual(['potato', 'tomato', 'asparagus'],['potato', 'tomato', 'asparagus']);