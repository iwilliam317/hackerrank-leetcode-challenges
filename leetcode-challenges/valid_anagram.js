https://leetcode.com/problems/valid-anagram/description/

let s = 'anagram';
let t = 'nagaram';

const isAnagram = (s, t) => {    
    return sameLetters(s,t)
};

const orderedWord = s => s.split('').sort().join('');

const sameLetters = (s,t) => orderedWord(s)=== orderedWord(t);
