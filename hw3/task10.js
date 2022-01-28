let reverse = function(arr) {
    let arr1 = [];

    if (Array.isArray(arr) && arr.length !== 0) {

            for (let i = 0; i < arr.length; i++) {
                arr1.unshift(arr[i]);
            }
    }
    else {
        throw new Error('The error: the incorrect type parameter or the array is empty');
    }
return arr1;
};

const arr = [3, 2, 1, 0, -1];

let result = reverse(arr);

console.log(result);
//[ -1, 0, 1, 2, 3 ]


/*
let reverse = function(arr, callback) {
    let arr1 = [];

    if (Array.isArray(arr) && typeof callback === 'function' && arr.length !== 0) {

            for (let i = 0; i < arr.length; i++) {
                if (callback(arr[i], i, arr)) {
                    arr1.unshift(arr[i]);
                }
            }
    }
    else {
        throw new Error('The error: the incorrect type parameter or the array is empty');
    }
return arr1;
};

const arr = [3, 2, 1, 0, -1];

let result = reverse(arr, function(item, i, arr) {

        return item;
});

console.log(result);
//[ -1, 1, 2, 3 ]
*/