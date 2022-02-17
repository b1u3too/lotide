const letterPositions = function(sentence) {
  const results = {};

  [...sentence].forEach((letter, index) => {
    if (results[letter]) {
      results[letter].push(index);
    } else {
      results[letter] = [index];
    }
  });

  delete results[' '];

  return results;
};

module.exports = letterPositions;