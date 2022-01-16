var arr = [1, 2, 3, 4];

let sum = 0;

for(i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) {
        sum = sum + arr[i]; 
    }
    else {
        sum = sum + 0;
    }
}
console.log(sum);


let sum2 = 0;
var i;

for (i of arr) {
    if(i % 2 == 0) {
        sum2 = sum2 + i;
    } 
}
console.log(sum2);