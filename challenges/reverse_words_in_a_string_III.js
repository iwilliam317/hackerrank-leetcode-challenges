https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

const stringToArray = s => s.split(' ');
const invertWord = s => s.split('').reverse().join('');
const arrayToString = s => s.join(' ');

const compose = (fa, fb, fc) => s => {
  return fa(
      fb(s).map(fc)
    )
}
const reverseWords = compose(arrayToString, stringToArray, invertWord );

reverseWords('Let\'s take LeetCode contest')