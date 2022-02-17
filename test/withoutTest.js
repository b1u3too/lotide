const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("should not mutate the source array", () => {
    const testing = [1,2,3];
    without(testing, [2]);
    assertArraysEqual(testing, [1,2,3]);  
  });
  it("should not return any instances of the indicated elements in the new array", () => {
    assertArraysEqual(without([1,2,3],[2]), [1,3]);
    assertArraysEqual(without([1,2,2,2,2,2,3],[2]), [1,3]);
    assertArraysEqual(without(['1','2',3],[1,2]),['1','2',3]);
    assertArraysEqual(without(['Potato', 'potato', 'tomato'],['potato']),['Potato', 'tomato']);
    assertArraysEqual(without(['ready','freddy'],['let\'s', 'go']),['ready', 'freddy']);
  });
});