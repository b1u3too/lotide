const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should not alter the length of the provided array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  it("should return an empty array if given an empty array", () => {
    assert.deepEqual(tail([]),[]);
  });
  it("should return an empty array if given a single element array", () => {
    assert.deepEqual(tail(['Hello Darkness My Old Friend']), []);
  });
  it("should return all but the first element when given an array length 2 or more", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    assert.deepEqual(tail([0,1,2,3,4,5,6]), [1,2,3,4,5,6]);
  });
});