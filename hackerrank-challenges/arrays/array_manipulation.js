const n = 5
const arr = new Array(n).fill(0);
let result = 0;
const queries = [[1, 2, 100],[2, 5, 100],[3, 4, 100]]
queries.forEach(([a, b, k]) => {
    arr[a - 1] += k;
    console.log(b, arr.length)
    if (b < arr.length) {
        arr[b] -= k;
    }
});

 console.log(arr)

arr.reduce((a, b) => {
    const acc = a + b;
    result = Math.max(result, acc);
    return acc;
}, 0);

// return result;

// console.log(result)