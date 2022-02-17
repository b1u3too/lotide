const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("should accurately count letters for a selected phrase", () => {
    const testString = "lighthouse in the house";
    assert.strictEqual(countLetters(testString).l, 1);
    assert.strictEqual(countLetters(testString).i, 2);
    assert.strictEqual(countLetters(testString).e, 3);
    assert.strictEqual(countLetters(testString).s, 2);
    assert.strictEqual(countLetters(testString).u, 2);
    assert.strictEqual(countLetters(testString).h, 4);

  });
  it("should return an empty object if given a string with no letters", () => {
    assert.deepEqual(countLetters("      "), {});
    assert.deepEqual(countLetters(""),{});
  });
});
