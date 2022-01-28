let some = function(arr, callback) {
    
    if (Array.isArray(arr) && typeof callback === 'function') {

            for (let i = 0; i < arr.length; i++) {

                    if (callback(arr[i], i, arr)) {
                        return true;
                    }
            }
    }
    else {
        throw new Error('The type parameter is not correct!');
    }
return false;
};

let arr = [1, 2, 3];
let result = some(arr, function(item, i, arr) {
    return item > 4;
});

console.log(result);
//false