const findKey = function(inputObject, callbackFn) {
  for (const key in inputObject) {
    if (callbackFn(inputObject[key])) {
      return key;
    }
  }
}

module.exports = findKey;