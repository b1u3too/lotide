const assertEqual = require('../assertEqual');

console.log("#assertEqual visual samples: ");
console.log();
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(3, 25);
assertEqual(3,'3'); //this test displays funkily, will explore how to make that more user friendly in future