let n;
function isEven(n) {
    if(typeof n !== 'number') {
        throw new Errow('parameter type is not a Number')
    }
    return (n % 2 === 0) ? true : false   
}

console.log(isEven(15))
console.log(isEven(6))
console.log(isEven(''))