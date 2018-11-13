https://leetcode.com/problems/detect-capital/description/

const isUpper = s => s === s.toUpperCase();
const isLower = s => s === s.toLowerCase();
const isFirstLetterCapital = s => {
    let [firstLetter, ...rest] = s.split();
    return firstLetter === firstLetter.toUpperCase() && rest.join('') === rest.join('').toLowerCase();
}
const compose = (fa, fb, fc) => s => fa(s) || fb(s) || fc(s);

const detectCapitalUse = compose(isUpper, isLower, isFirstLetterCapital);

console.log(detectCapitalUse('USA')); //true