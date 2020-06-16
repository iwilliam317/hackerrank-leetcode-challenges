function processData(input) {
    const processedInput = input.split('\n')
    let [numberOperations, ...operations] = processedInput
    let text = ''
    const history = []

    for (let i = 0; i < operations.length; i++){
        const arg = operations[i].split(' ')[1]
        const operationCode = operations[i][0]
        
        switch (operationCode){
            case '1':
                history.push(text)
                text = text + arg
                break
            case '2':
                history.push(text)
                text = text.slice(0, text.length - arg)
                break
            case '3':
                console.log(text[arg-1])
                break
            case '4':
                text = history.pop()
                break
            default:
                break
        }
    }

} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
