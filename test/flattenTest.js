const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("should not mutate the array passed into the function", () => {
    let testing = [1,[2,3]];
    flatten(testing);
    assert.deepEqual(testing,[1,[2,3]]);
  });
  it("return an empty array if passed an empty array", () => {
    assert.deepEqual(flatten([]), []);
  });
  it("return a flattenned array when recieving 2D nested arrays", () => {
    assert.deepEqual(flatten(['a','b', ['c','d'], 'e', ['f','g','h']]), ['a','b','c','d','e','f','g','h']);
    assert.deepEqual(flatten([[1],[2,3],[4,5,6]]),[1,2,3,4,5,6]);
  });
});