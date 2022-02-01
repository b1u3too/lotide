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

const middle = function (inputArray) {

  if (inputArray.length <= 2) {
    return [];
  }

  const middleIndex = Math.ceil(inputArray.length / 2) - 1;

  if (inputArray.length % 2 !== 0) {
    return [inputArray[middleIndex]];
  } else {
    return inputArray.slice(middleIndex, middleIndex + 2);
  }

}

assertArraysEqual(middle([]),[]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);