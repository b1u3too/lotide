const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //is this item meant to be counted?
    if (itemsToCount[item]) {
      //Check if a tally has started. Yes? Add 1. No? Start the tally at 1.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;