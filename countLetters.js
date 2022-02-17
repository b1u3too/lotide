const countLetters = function(message) {
  const letterTallies = {};
  const inputLettersLowerCased = message.toLowerCase().split(' ').join('');

  for (const letter of inputLettersLowerCased) {
    if (letterTallies[letter]) {
      letterTallies[letter]++;
    } else {
      letterTallies[letter] = 1;
    }
  }

  return letterTallies;
};

module.exports = countLetters;