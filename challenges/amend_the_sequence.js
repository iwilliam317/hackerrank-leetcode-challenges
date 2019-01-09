https://app.codesignal.com/interview-practice/task/yXDg4rAk9ooEjLjdj

const checkCapitalLetter = letter => letter === letter.toUpperCase()

const amendTheSentence = sentence => {
  let aux = sentence[0].toLowerCase();

  for(let i = 1; i < sentence.length; i++){  
    if(!checkCapitalLetter(sentence[i])){
      aux += sentence[i].toLowerCase()
    }
    else{
      aux += ' ' + sentence[i].toLowerCase()
    }
  }
  return aux
}



const sentence = 'hello'
console.log(amendTheSentence(sentence))
