const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🥳✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑😱🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(3, 25);
assertEqual(3,'3'); //this test displays funkily, will explore how to make that more user friendly in future