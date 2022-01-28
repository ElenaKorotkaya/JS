let f = function(arr) {

    let sum = 0;

    if (Array.isArray(arr)) {
        arr = arr.flat(Infinity);

        for (let i = 0; i < arr.length; i++) {

            if (typeof arr[i] === 'number') {
                sum += arr[i];
            }
            else {
                throw new Error('The element of the array is not a number!')
            }
        }
    }
    else {
        throw new Error('The type parameter is not an array!');
    }

return sum;    
};

//let arr = []
//let arr = ['a'];
let arr = [[1,2], [3,4]];

let result = f(arr);

console.log(result);
//chrome: 0
//chrome: VM144:14 Uncaught Error: The element of the array is not a number!
//chrome: 10


/*
let f = function(arr) {

    let sum = 0;

    arr = arr.flat(Infinity);

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];
    }


return sum;    
};

let arr = [];

let result = f(arr);

console.log(result);
//chrome: 6
*/

/*

let f = function(arr) {

    arr = arr.flat(Infinity);

    let status = arr.every(function(n) {

        return typeof n === 'number' || Array.isArray(n);
    });

        if (Array.isArray(arr) && status) {

            let result = arr.reduce(function(sum, current) {

                return sum + current;
            }, 0);

        }
        else {
            throw new Error('The type parameter is not an array!');
        }
 return result;       
};

let arr = [1, 2, 3];

let transformed = f(arr);

console.log(transformed);
//TypeError: arr.flat is not a function
*/

