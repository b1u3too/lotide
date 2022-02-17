const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅🥳✅ Assertion Passed: ${inspect(actual)} matches ${inspect(expected)}`);
  } else {
    console.log(`🛑😱🛑 Assertion Failed: ${inspect(actual)} DOES NOT match ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

assertObjectsEqual({},{a:' '});
assertObjectsEqual({a:2, b:3}, {a:2, b:3});
