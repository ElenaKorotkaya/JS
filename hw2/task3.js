var f = function(a, b, c) {
    (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') ? console.log((a-b)/c) : console.log('Вводите только числа')  
}

f(10, 4, 2)
f(10, 4, 'hi')
