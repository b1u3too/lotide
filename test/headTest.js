
const assert = require('chai').assert;
const { italic } = require('ansi-colors');
const head = require('../head');

describe("#head", () => {
  it("Returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns 'Important Notice' for ['Important Notice']", () => {
    assert.strictEqual(head(["Important Notice"]), "Important Notice");
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});