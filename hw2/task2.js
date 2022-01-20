let s = 0;

let sum = function () {

    for (item of arguments) {

        (typeof item === 'number') ? s = s + item : s=s+0;   
    } 
    return s;     
}

console.log(sum(8, 7, 'hi'))

