function cleanSet(set, startString) {
  return [...set]
  .filter(value => value.startsWith(startString))
  .filter(value => value.slice(startString.length))
  .join('-');
}
