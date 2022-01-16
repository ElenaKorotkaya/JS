var arr = [1, 2, 3, 4, 5, 6];

var swap;

for (i = 0; i < arr.length-1; i++) {
    for (j = 0; j < arr.length-1-i; j++) {
        if (arr[j] < arr[j+1]) {
            swap = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = swap;
        }
    }
}
console.log(arr);
