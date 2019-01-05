// https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC
const amountOccurence = (letter, array) => array.filter(a => a == letter.toString()).length

const firstNotRepeatingCharacter = s => {
  let arr = s.split('')
  for(let i = 0; i < arr.length; i++){
    if(amountOccurence(arr[i], arr) == 1){
      return arr[i]
    }
  }
  return '_'
}


console.log(firstNotRepeatingCharacter('abaabcad'))