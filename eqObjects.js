const eqArrays = require('./eqArrays');

const eqObjects = function(firstObject, secondObject) {
  let state = true;

  if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
    state = false;
  }

  const keyArray = Object.keys(firstObject);

  for (const key of keyArray) {
    //check if what's stored at thsi key is an array. if yes, call on eqArrays to check equality
    if (Array.isArray(firstObject[key]) && Array.isArray(secondObject[key])) {
      if (!eqArrays(firstObject[key], secondObject[key])) {
        state = false;
      }
      //if both things stored in that key are objects (not arrays), get recursive!
    } else if (typeof firstObject[key] === "object" && typeof secondObject[key] === "object") {
      state = eqObjects(firstObject[key], secondObject[key]);
      //otherwise, straightforward comparison check
    } else {
      if (firstObject[key] !== secondObject[key]) {
        state = false;
      }
    }
  }

  return state;
};

module.exports = eqObjects;