// https://www.hackerrank.com/challenges/maximum-element/problem
    function processData(input) {

        const inputs = input.split('\n');
        const numberOfQuery = Number(inputs[0]);

        let stack = [];
        let max = 0
        let aux = []

        for(let i = 1; i <= numberOfQuery;i++){
            const query = inputs[i];
            const type = Number(query.split(' ')[0]);
            const value = Number(query.split(' ')[1]);
        
            switch(type){
                case 1:
                    stack.push(value);
                    if(value > max){ 
                        max = value
                    }
                    aux.push(max)
                    break;
                case 2:
                    let x = stack.pop()
                    aux.pop(x)
                    max = aux.length === 0 ? 0 : aux[aux.length-1]


                break;
                case 3:

                    console.log(aux[aux.length-1])
                    

                break;
                default:
                console.log('unknown type',type); 
                
                    
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
