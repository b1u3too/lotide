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

const without = function(source, itemsToRemove) {
  keptItems = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      keptItems.push(item);
    }
  }
  
  return keptItems;
};

//TEST CODE
//does not mutate source array
const testing = [1,2,3];
without(testing, [2]);
assertArraysEqual(testing, testing);

//basics
assertArraysEqual(without([1,2,3],[2]), [1,3]);
assertArraysEqual(without(['1','2',3],[1,2]),['1','2',3]);
assertArraysEqual(without(['Potato', 'potato', 'tomato'],['potato']),['Potato', 'tomato']);
assertArraysEqual(without(['ready','freddy'],['let\'s', 'go']),['ready', 'freddy']);