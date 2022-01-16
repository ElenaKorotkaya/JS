var arr = [1, 2, 3, 4];

let sum = 0;

for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);

let sum2 = 0;
var i;

for (i of arr) {
    sum2 = sum2 + i;
}
console.log(sum2);