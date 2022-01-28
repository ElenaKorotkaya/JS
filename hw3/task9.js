let arrayFill = function(n, x) {

    let arr = [];
    arr.length = x;

    if ((typeof n === 'number' || 'string' || typeof n === 'object' || Array.isArray(n)) && typeof x === 'number') {

        arr.fill(n, 0, x + 1);
    } 
    else {
        throw new Error('The type parameter is not correct!');
    }

return arr;
};

let result = arrayFill(5, 7);
console.log(result);
//[ 5, 5, 5, 5, 5, 5, 5 ]


/*
var arr = [1, 2, 3, 4, 5];
arr.fill(0, 2, 4);
console.log(arr);
//[ 1, 2, 0, 0, 5 ]
*/