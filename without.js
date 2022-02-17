const without = function(source, itemsToRemove) {
  let keptItems = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      keptItems.push(item);
    }
  }
  
  return keptItems;
};

module.exports = without;