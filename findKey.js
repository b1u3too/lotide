const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🥳✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑😱🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(inputObject, callbackFn) {
  for (const key in inputObject) {
    if (callbackFn(inputObject[key])) {
      return key;
    }
  }
}

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
assertEqual(test1, "noma");

const test2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 42);
assertEqual(test2, undefined);

const test3 = findKey({
  Sir: {species: "cat", age: 4},
  Evie: {species: "cat", age: 17},
  Barkley: {species: "dog", age: 12, occupation: "goodboi"},
  Belle: {species: "dog", age: 14, occupation: "sweetgirl"}
}, x => x.occupation === "goodboi");
assertEqual(test3, "Barkley");

const test4 = findKey({}, x => x >= 0);
assertEqual(test4, undefined);


