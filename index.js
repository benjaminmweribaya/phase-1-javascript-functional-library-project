function myEach(collection, callback) {
    // Check if the collection is an object or array.
    const values = Array.isArray(collection) ? collection : Object.values(collection);

    // Loop through each value and apply the callback function.
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }

    // Return the original collection (unmodified).
    return collection;
}

function myMap(collection, callback) {
    // Check if the collection is an object or array.
    const values = Array.isArray(collection) ? collection : Object.values(collection);

    // Create an array to store transformed values.
    const result = [];

    // Loop through each value and apply the callback function.
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i]));
    }

    // Return the new array of transformed values.
    return result;
}

function myReduce(collection, callback, acc) {
    // Convert object values to array if collection is an object.
    const values = Array.isArray(collection) ? collection : Object.values(collection);

    // If no initial accumulator is provided, use the first value in the collection.
    let startIndex = 0;
    if (acc === undefined) {
        acc = values[0];
        startIndex = 1; // Skip the first element as it's used as the initial accumulator.
    }

    // Iterate through each value and update the accumulator using the callback.
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }

    // Return the accumulated value.
    return acc;
}

function myFind(collection, predicate) {
    // Convert object values to array if collection is an object.
    const values = Array.isArray(collection) ? collection : Object.values(collection);

    // Iterate through each value.
    for (let i = 0; i < values.length; i++) {
        // If the predicate function returns true, return the current value.
        if (predicate(values[i])) {
            return values[i];
        }
    }

    // Return undefined if no value satisfies the predicate.
    return undefined;
}

function myFilter(collection, predicate) {
    // Convert object values to array if collection is an object.
    const values = Array.isArray(collection) ? collection : Object.values(collection);

    // Create an array to store values that pass the predicate test.
    const result = [];

    // Iterate through each value.
    for (let i = 0; i < values.length; i++) {
        // If the predicate function returns true, add the value to the result array.
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }

    // Return the array of filtered values.
    return result;
}

function mySize(collection) {
    // Use array length or object keys length to determine the size of the collection.
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
    // If n is not provided, return the first element.
    if (n === undefined) {
        return array[0];
    }

    // If n is provided, return the first n elements.
    return array.slice(0, n);
}

function myLast(array, n) {
    // If n is not provided, return the last element.
    if (n === undefined) {
        return array[array.length - 1];
    }

    // If n is provided, return the last n elements.
    return array.slice(-n);
}

function mySortBy(array, callback) {
    // Create a copy of the array to avoid modifying the original.
    const copy = [...array];

    // Sort the array using the values returned by the callback.
    return copy.sort((a, b) => {
        const aVal = callback(a);
        const bVal = callback(b);

        // Compare values for sorting.
        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
        return 0;
    });
}

function myFlatten(array, shallow = false, newArr = []) {
    // Iterate through each element in the array.
    for (let i = 0; i < array.length; i++) {
        const value = array[i];

        // If the value is an array and shallow is false, recursively flatten it.
        if (Array.isArray(value) && !shallow) {
            myFlatten(value, shallow, newArr);
        } else if (Array.isArray(value) && shallow) {
            // If shallow is true, add the nested array elements directly.
            newArr.push(...value);
        } else {
            // If the value is not an array, add it directly to the new array.
            newArr.push(value);
        }
    }

    // Return the new array.
    return newArr;
}

function myKeys(object) {
    // Use Object.keys() to get all enumerable property names of the object.
    return Object.keys(object);
}

function myValues(object) {
    // Use Object.values() to get all values of the object's properties.
    return Object.values(object);
}



