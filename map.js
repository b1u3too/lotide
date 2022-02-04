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

const map = function (inputArray, callbackFunc) {
  const outputArray = [];

  for (const item of inputArray) {
    outputArray.push(callbackFunc(item));
  }

  return outputArray;
};

const test1 = ["We","don't","talk","about","Bruno","No"];
const results1 = map(test1, word => word[0]);
assertArraysEqual(results1,["W","d","t","a","B","N"]);

const test2 = [1,2,3,4,5,6,7,8];
const results2 = map(test2, num => Math.pow(num, 2));
assertArraysEqual(results2, [1,4,9,16,25,36,49,64]);

const test3 = ["potato", "tomato", "carrot", "apple"];
const results3 = map(test3, word => word.substring(0,3));
assertArraysEqual(results3,["pot","tom","car","app"]);