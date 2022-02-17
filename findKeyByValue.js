const findKeyByValue = function(inputObject, inputValue) {
  let foundKey;
  const keysArray = Object.keys(inputObject);

  for (const key of keysArray) {
    if (inputObject[key] === inputValue) {
      foundKey = key;
    }
  }

  return foundKey;
};

module.exports = findKeyByValue;