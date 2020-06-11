// https://www.hackerrank.com/challenges/balanced-brackets/problem

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

// Complete the isBalanced function below.
function isBalanced(s) {
    const array = s.split('')
    const hash = {
        "{": "}",
        "[": "]",
        "(": ")",
        "}": "{",
        "]": "[",
        ")": "("
    }

    const result = []
    for(let i = 0; i < array.length; i++){
        if (!result.includes(hash[array[i]])){ 
            if ((array[i] === ')') || (array[i]=== '}') || (array[i] === ']')){
                return 'NO'
            }
                result.push(array[i])
        }
        else{
            result.pop(array[i])
        }
    }
    return result.length === 0 ? 'YES' : 'NO'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}
