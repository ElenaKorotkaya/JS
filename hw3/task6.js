
let reduceRight = function(arr, callback, startValue) {

    if (Array.isArray(arr) && typeof callback === 'function' &&
        (typeof startValue === 'string' || typeof startValue === 'number')) {

            result = startValue;
            for (let i = arr.length; i > 0; i--) {

                result = callback(null, result, arr[i], i, arr);
            }
    }
    else {
        throw new Error('The type parameter is not correct!');
    }
return result;
};

let arr = [1, 2, 3];
const acc = 0;

let arrResult = reduceRight(arr, function(acc, result, item, i, arr) {

    return i + result;
}, acc);

console.log(arrResult);
