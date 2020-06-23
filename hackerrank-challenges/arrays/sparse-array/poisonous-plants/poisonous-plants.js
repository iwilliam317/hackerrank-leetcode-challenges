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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the poisonousPlants function below.
function poisonousPlants(a) {
    let morreu = true
    let counter = 0
    let morre = []
    while (morreu) {
        
        morreu = false
        
        for (let i = 1; i < a.length; i++){
            if (a[i] > a[i-1]){
                morre.push(i)
                morreu = true
                
            }
        }

        for (let i =0 ; i < morre.length; i++){
            a.splice(morre[i] - i, 1);
        }
        if (morreu){
            counter += 1
            morre.length = 0
        }
    }
    return counter
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    let result = poisonousPlants(p);

    ws.write(result + "\n");

    ws.end();
}
