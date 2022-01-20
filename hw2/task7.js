var number;
var arr = []

function getDivisors(number) {
    if (typeof number !== 'number') {
        throw new Errow('parameter type is not a Number')
    } else if (number <= 0) {
        throw new Errow('parameter type should be > 0')
    } else {
        for (var i = 1; i <= number; i++ ) {
            if (number % i === 0) {
                //console.log(i)
                arr.push(i)
            }
        }
    }
    return arr;
}

console.log(getDivisors(21))
//console.log(getDivisors(-5))
console.log(getDivisors(''))
//console.log(arr)