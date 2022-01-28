var arr = ['abcd', 'abcde', 'ab', 'abc'];

var arrLength = arr.map(function(n) {
   
    return n.length;
});
/*
for (var i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
}
*/
console.log(arr);
console.log(arrLength);
//[ 'abcd', 'abcde', 'ab', 'abc' ]
//[ 4, 5, 2, 3 ]