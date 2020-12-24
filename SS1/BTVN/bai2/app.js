let arr = [];
let inputarr = [1, 2, 3, 4, 5, 7, 9, -3]
function findOddNumber(inputarr) {
    for (let i = 0; i < inputarr.length; i++) {
        if (inputarr[i] % 2 != 0) {
            arr.push(inputarr[i]);
        }
    }
    console.log(arr);
}
findOddNumber(inputarr);

// without using loop
arr = inputarr.filter((index) => index % 2 != 0);
console.log(arr);