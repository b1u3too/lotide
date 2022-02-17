const flatten = function(inputArray) {
  let flattenedArray = [];

  for (const item of inputArray) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        flattenedArray.push(subItem);
      }
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
};

module.exports = flatten;