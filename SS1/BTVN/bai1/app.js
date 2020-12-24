let arr = [3, 6, -2, -5, 7, 3];
let max = 0;

function adjacentElementProduct(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] * arr[i + 1] > max) {
            max = arr[i] * arr[i + 1];
        }
    }
    console.log(max);
}
adjacentElementProduct(arr);