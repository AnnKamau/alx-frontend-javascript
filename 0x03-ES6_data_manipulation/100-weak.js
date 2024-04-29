const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const key = JSON.stringify(endpoint);

  if (!weakMap.has(key)) {
    weakMap.set(key, 1);
  } else {
    const count = weakMap.get(key);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(key, count + 1);
  }
}

export { weakMap, queryAPI };
