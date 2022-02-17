const map = function (inputArray, callbackFunc) {
  const outputArray = [];

  for (const item of inputArray) {
    outputArray.push(callbackFunc(item));
  }

  return outputArray;
};

module.exports = map;