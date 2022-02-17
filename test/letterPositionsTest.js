const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return an object summarizing all indexes each letter appears in as an array", () => {
    const testString = "trying something longer";
    assert.deepEqual(letterPositions(testString).t, [0,11]);
    assert.deepEqual(letterPositions(testString).g, [5,15,20]);
    assert.deepEqual(letterPositions(testString).l, [17]);
    assert.deepEqual(letterPositions(testString).o, [8,18]);
  });
});