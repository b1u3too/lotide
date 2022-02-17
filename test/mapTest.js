const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("should apply the callback function mutation and output it into an array", () => {
    const test1 = ["We","don't","talk","about","Bruno","No"];
    const results1 = map(test1, word => word[0]);
    assert.deepEqual(results1,["W","d","t","a","B","N"]);

    const test2 = [1,2,3,4,5,6,7,8];
    const results2 = map(test2, num => Math.pow(num, 2));
    assert.deepEqual(results2, [1,4,9,16,25,36,49,64]);

    const test3 = ["potato", "tomato", "carrot", "apple"];
    const results3 = map(test3, word => word.substring(0,3));
    assert.deepEqual(results3,["pot","tom","car","app"]);
  });
  it("should not mutate the original array", () => {
    const test3 = ["potato", "tomato", "carrot", "apple"];
    const results3 = map(test3, word => word.substring(0,3));
    assert.deepEqual(test3, ["potato", "tomato", "carrot", "apple"]);
  });
});