const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("should store how often selected values appear in provided array", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    
    assertEqual(result1["Jason"], 1);
    assertEqual(result1["Karima"], undefined);
    assertEqual(result1["Fang"], 2);
    assertEqual(result1["Agouhanna"], undefined);
  });
});