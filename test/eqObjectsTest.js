const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("should return true when both objects have the same keys and matching values inside those keys", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };

    assert.strictEqual(eqObjects(ab, ba), true);
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("should return false when objects have differing keys, or differing contents of those keys", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3"};
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(ab, abc), false);
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
  it("should correctly discern a match, including an object or array nested as a key value", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
    assert.strictEqual(eqObjects({a: [1,2,3], b: ["easy", "as"], c: [2,7, [56]]},{a: [1,2,3], b: ["easy", "as", "it", "can", "be"], c: [2,7, [56]]}), false);
  });
  it("should correctly discern a match for multiple nested objects within objects", () => {
    assert.strictEqual(eqObjects({a: {b: {c: {d: {e: {f: {g: 42}}}}}}}, {a: {b: {c: {d: {e: {f: {g: 42}}}}}}}), true);
  });
});
