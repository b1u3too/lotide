const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🥳✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑😱🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  let state = true;

  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (Array.isArray(firstArray[i]) && Array.isArray(secondArray[i])) {
      state = eqArrays(firstArray[i], secondArray[i]);
      if (state === false) {
        break;
      }
    } else if (firstArray[i] !== secondArray[i]) {
      state = false;
      break;
    }
  }

  return state;
};

const eqObjects = function(firstObject, secondObject) {
  let state = true;

  if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
    state = false;
  }

  const keyArray = Object.keys(firstObject);

  for (const key of keyArray) {
    //check if what's stored is an array. if yes, call on eqArrays to check equality
    if (Array.isArray(firstObject[key]) && Array.isArray(secondObject[key])) {
      if (!eqArrays(firstObject[key], secondObject[key])) {
        state = false;
      }
      //if both things stored in that key are objects (not arrays), get recursive!
    } else if (typeof firstObject[key] === "object" && typeof secondObject[key] === "object") {
      state = eqObjects(firstObject[key], secondObject[key]);
    } else {
      if (firstObject[key] !== secondObject[key]) {
        state = false;
      }
    }
  }

  return state;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3"};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({a: [1,2,3], b: ["easy", "as"], c: [2,7, [56]]},{a: [1,2,3], b: ["easy", "as", "it", "can", "be"], c: [2,7, [56]]}), false);
assertEqual(eqObjects({a: {b: {c: {d: {e: {f: {g: 42}}}}}}}, {a: {b: {c: {d: {e: {f: {g: 42}}}}}}}), true);