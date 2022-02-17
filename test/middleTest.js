const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return [] when given []", () => {
    assert.deepEqual(middle([]),[]);
  });
  it("should return [] when given a single element array", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return [] when given a two element array", () => {
    assert.deepEqual(middle([1,2]),[]);
  });
  it("should return the [middle element] for arrays of odd length", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });
  it("should return the [middle, elements] for arrays of even length", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });
});