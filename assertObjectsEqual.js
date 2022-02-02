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

const eqObjects = function(firstObject, secondObject) {
  if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
    return false;
  }

  const keyArray = Object.keys(firstObject);
  for (const key of keyArray) {
    if (Array.isArray(firstObject[key])) {
      if (!eqArrays(firstObject[key], secondObject[key])) {
        return false;
      }
    } else {
      if (firstObject[key] !== secondObject[key]) {
        return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅🥳✅ Assertion Passed: ${inspect(actual)} matches ${inspect(expected)}`);
  } else {
    console.log(`🛑😱🛑 Assertion Failed: ${inspect(actual)} DOES NOT match ${inspect(expected)}`);
  }
};

assertObjectsEqual({},{a:' '});
assertObjectsEqual({a:2, b:3}, {a:2, b:3});
