
var arr = [1, 2, -4, 3, -9, -1, 7]

var arr2 = [];

for (i of arr) {
    if(isPositive(i) === true) { 
            arr2.push(i);
    }    
}

for (i of arr2) {
    console.log(i)
}

function isPositive(i) {
    if(typeof i !== 'number') {
        throw new Error('parameter type: ' + i + ' is not a Number!')
    } 
    return i > 0
}

/*
function isPositive (i) {
    
    if (typeof i !== 'number')  {
        throw new Error('parameter type: ' + i + ' is not a Number!')
    }
    else if (i > 0) {
        //console.log(i);
           return true;
    }
    else if (i <=0) {
        return false;
    }
}
*/

/*
var arr3 = [8]
arr3.push(2)
console.log(arr3[0])
*/

/*

const evenNumberInArray = (array) => {
    if ((array.length == 0) || !Array.isArray(array)) {
        return 'Passed argument is notan array or empty'
    } if (array.filter(x => typeofx !== 'number')) {
        return 'parameter type is not a Number'
    } 
    else if (array.some(x => x % 2 === 0) == false){
        return 'passed array does not contain even numbers'
    } 
    return array.filter (x => x % 2 === 0)
}

console.log(evenNumberInArray([5, 7, 8, 6]))
*/