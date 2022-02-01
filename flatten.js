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

const flatten = function(inputArray) {
  let flattenedArray = [];

  for (const item of inputArray) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        flattenedArray.push(subItem);
      }
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
};


//TEST CODE
//check that it doesn't mutate the original array
let testing = [1,[2,3]];
console.log("Testing is: ");
console.log(testing);
console.log("Flattened is: ");
console.log(flatten(testing));
console.log("Now testing is: ");
console.log(testing);

//what about when it gets an empty array?
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten(['a','b', ['c','d'], 'e', ['f','g','h']]), ['a','b','c','d','e','f','g','h']);
assertArraysEqual(flatten([[1],[2,3],[4,5,6]]),[1,2,3,4,5,6]);