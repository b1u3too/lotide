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
}

module.exports = eqArrays;