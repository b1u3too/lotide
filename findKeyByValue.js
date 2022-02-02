const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🥳✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑😱🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(inputObject, inputValue) {
  let foundKey;
  const keysArray = Object.keys(inputObject);

  for (const key of keysArray) {
    if (inputObject[key] === inputValue) {
      foundKey = key;
    }
  }

  return foundKey;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "drama"), undefined);