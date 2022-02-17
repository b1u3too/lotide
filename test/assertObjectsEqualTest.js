const assertObjectsEqual = require('../assertObjectsEqual');

console.log("#assertEqual visual samples: ");
console.log();

assertObjectsEqual({},{a:' '});
assertObjectsEqual({a:2, b:3}, {a:2, b:3});