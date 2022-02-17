const middle = function (inputArray) {

  if (inputArray.length <= 2) {
    return [];
  }

  const middleIndex = Math.ceil(inputArray.length / 2) - 1;

  if (inputArray.length % 2 !== 0) {
    return [inputArray[middleIndex]];
  } else {
    return inputArray.slice(middleIndex, middleIndex + 2);
  }

}

module.exports = middle;