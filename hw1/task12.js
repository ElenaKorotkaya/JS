let arr = [1, 2, 3, -5, -2, 1, -4];

let sum = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum = sum + arr[i];
    }
}
console.log(sum);

let sum2 = 0;

for (i of arr) {
    if (i > 0) {
        sum2 = sum2 + i;
    }
}
console.log(sum2);