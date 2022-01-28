let reduce = function(arr, callback, startValue) {

    if (Array.isArray(arr) && typeof callback === 'function' && 
            (typeof startValue === 'string' || typeof startValue === 'number')) {

                result = startValue;
                for (let i = 0; i < arr.length; i++) {
                    
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

let arrResult = reduce(arr, function(acc, result, item, i, arr) {

        return result + item;
}, acc);

console.log(arrResult);
//6