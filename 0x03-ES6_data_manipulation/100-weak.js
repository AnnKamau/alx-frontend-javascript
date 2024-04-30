const weakMap = new WeakMap();

function queryAPI(endpoint) {
    if (!weakMap.has(endpoint)) {
        weakMap.set(endpoint, 0);
    }

    let count = weakMap.get(endpoint);
    count++;

    if (count >= 5) {
        throw new Error(`Endpoint load is high`);
    }

    weakMap.set(endpoint, count);

    console.log(`Calling API for endpoint: ${endpoint.name}`);

    return `Response for ${endpoint.name}`;
}

export { weakMap, queryAPI };
