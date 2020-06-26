const isEmpty = array => array.length === 0
const isBalanced = () =>
{
const array = '{{[[(())]]}}'
    const stack = []

    for (let i =0; i < array.length; i++){
        if (array[i] == '{' || array[i]== '(' || array[i] == '['){
            stack.push(array[i])
        }
        else{
            if (isEmpty(stack)) {
                return 'NO'
            }
            let top = stack.pop()
            if((top == '(' && array[i] != ')'  ) || (top == '[' && array[i] != ']'  ) || (top == '{' && array[i] != '}'  )) {
                return 'NO'
            }
        }
    }
    return isEmpty(stack) ? 'YES': 'NO'
}  

isBalanced()