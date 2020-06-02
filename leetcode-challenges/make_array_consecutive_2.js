// https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC
const ascendingOrder = (a, b) => a - b;

const makeArrayConsecutive2 = statues => {
  const orderedStatues = statues.sort(ascendingOrder)
  const [first] = orderedStatues
  const last = orderedStatues[orderedStatues.length-1]

  let counter = 0;
  for(let i = first+1; i < last; i++){
    if(!statues.includes(i)) counter++
  }
  return counter
}

const arr = [4, 2, 7, 18]
console.log(makeArrayConsecutive2(arr))