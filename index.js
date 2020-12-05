
function map(array, func) {
    let result = [];
    for (const el of array) {
        result.push(func(el));
    }
    return result;
}

function reduce(array, func, startValue) {
    let r = (!!startValue) ? startValue : array[0]
    let i = (!!startValue) ? 0 : 1
    for (; i < array.length; i++) {
        r = func(array[i], r);
    }
    return r;
}
