function forEach(arr, callback) {
    if(Array.isArray(arr) && typeof callback === 'function') {

        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);   
        }
    return arr;
    } 
    else {
        throw new Error('The type parameter is not correct');
    }
    //return arr;
}

const arr = [1, 2, 3];

let result = forEach(arr, function(item, i, arr) {
    //console.log(item, i, arr);
    console.log('Item: ' + item, '; i: ' + i, '; arr: ' + arr);
});

console.log(result);




