function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedGroceries = new Map(groceries);

  for (let [item, quantity] of updatedGroceries) {
    if (quantity === 1) {
      updatedGroceries.set(item, 100);
    }
  }

  return updatedGroceries;
}
