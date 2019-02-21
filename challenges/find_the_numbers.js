const findNumbers = (arr, k) => {
    return arr.some(n => n == k) ? "YES" : "NO"
}

findNumbers([2,3,1], 1)