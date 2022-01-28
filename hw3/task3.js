let every = function(arr, callback) {
    if (Array.isArray(arr) && typeof callback === 'function') {

        for (let i = 0; i < arr.length; i++) {
            if (!callback(arr[i], i, arr)) {
                return false;
            }
        }

    }
    else {
        throw new Error('The type parameter is not correct!');
    }
    return true;
};



let arr = [1, 2, 3];
let result = every(arr, function(item, i, arr) {
    return item > 1;
});
console.log(result);
//false

