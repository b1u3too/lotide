const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3],[1,2,3]); //true
assertArraysEqual([],[]); //true
assertArraysEqual(['potato', 'tomato', 'asparagus'],['potato', 'tomato', 'asparagus']); //true
assertArraysEqual([],[""]); //false
assertArraysEqual([1,2,3],[3,2,1]); //false
assertArraysEqual(['potato', 'tomato', 'asparagus'],['potato', 'tomato']); //false