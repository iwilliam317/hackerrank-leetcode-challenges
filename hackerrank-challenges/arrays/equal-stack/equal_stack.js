'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the equalStacks function below.
 */

const sum = (a, b) => Number(a) + Number(b)

function equalStacks(h1, h2, h3) {
    let height1 = h1.reduce(sum)
    let height2 = h2.reduce(sum)
    let height3 = h3.reduce(sum)
    let max = 0
    while(h1.length > 0){
        if(height1 > height2){
            height1 -= h1.shift()
        }
        if(height2 > height3){
            height2 -= h2.shift()
        }
        if(height3 > height1){
            height3 -= h3.shift()
        }
        if (height1 === height2 && height2 === height3){
            max = height1
            break
        }
    }
    return max

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n1N2N3 = readLine().split(' ');

    const n1 = parseInt(n1N2N3[0], 10);

    const n2 = parseInt(n1N2N3[1], 10);

    const n3 = parseInt(n1N2N3[2], 10);

    const h1 = readLine().split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().split(' ').map(h3Temp => parseInt(h3Temp, 10));

    let result = equalStacks(h1, h2, h3);

    ws.write(result + "\n");

    ws.end();
}
