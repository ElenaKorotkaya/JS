let filter = function(arr, callback) {
    let arr1 = [];
    if(Array.isArray(arr) && typeof callback === 'function') {

            for (let i = 0; i < arr.length; i++) {
                if (callback(arr[i], i, arr)) {
                    arr1.push(arr[i]);
                }
            }  
    }                      
    else {
        throw new Error('The type parameter is not correct');
    }
    return arr1;
};


const arr = [1, 2, 3];

let result = filter(arr, function(item, i, arr) {
    //console.log('Item > 1?: ' + arr[i] + '- ' + item, '; i: ' + i, '; arr: ' + arr);
    return item > 2;
});
console.log(result);
//[ 3 ]


/*let filter = function(arr, callback) {
    let arr1 = [];
    if(Array.isArray(arr) && typeof callback === 'function') {

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 1) {
                    arr1.push(arr[i]);
                }
                callback(arr1[i] > 1, i, arr); 
            }  
    }                      
    else {
        throw new Error('The type parameter is not correct');
    }
    return arr1;
}

const arr = [1, 2, 3];

let result = filter(arr, function(item, i, arr) {
    console.log('Item > 1?: ' + arr[i] + '- ' + item, '; i: ' + i, '; arr: ' + arr);

});
console.log(result);
*/






/*
function filter(arr, callback) {
    if(Array.isArray(arr) && typeof callback === 'function') {

            for (let i = 0; i < arr.length; i++) {
                callback(arr[i] > 1, i, arr); 
            }
    }
    else {
        throw new Error('The type parameter is not correct');
    }
    return arr;
}

const arr = [1, 2, 3];

let result = filter(arr, function(item, i, arr) {
    console.log('Item > 1?: ' + arr[i] + '- ' + item, '; i: ' + i)//, '; arr: ' + arr);

});
console.log(result);
*/


/*
var arr = [1, -1, 2, -2, 3];
var positiveArr = arr.filter(function(number) {
    return number > 1;
});
console.log(positiveArr);
//[ 2, 3 ]
*/
