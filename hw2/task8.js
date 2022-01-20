let arr = [1, 2, 3]
let i = 0

function f(arr) {

    if (!Array.isArray(arr)) {

        throw new Error('parameter type should be an array')
    } else if (arr.length === 0) {

        throw new Error(' The array is empty')
    } else {

        console.log(arr[i]);
        i++;
        if (i < arr.length) {

            f(arr)   
        }
    }
}

f(arr)
f('')

/*
function f2(arr) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) {
            f2(arr)
    }
}
f2(arr)
*/
