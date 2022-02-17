const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("should return the key of the first value satisfying the test callback fn", () => {
    const test1 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2); // => "noma"
    assert.strictEqual(test1, "noma");
  });
  it("should return undefined if no key-value pairs satisfy the callback test", () => {
    const test2 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 42);
    assert.strictEqual(test2, undefined);
  });
  it("should function correctly, even if the requested property does not exist in all elements", () => {
    const test3 = findKey({
      Sir: {species: "cat", age: 4},
      Evie: {species: "cat", age: 17},
      Barkley: {species: "dog", age: 12, occupation: "goodboi"},
      Belle: {species: "dog", age: 14, occupation: "sweetgirl"}
    }, x => x.occupation === "goodboi");
    assert.strictEqual(test3, "Barkley");
  });
  it("should return undefined if passed an empty object", () => {
    const test4 = findKey({}, x => x >= 0);
    assert.strictEqual(test4, undefined);
  });
});

