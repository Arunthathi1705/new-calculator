
function display(input) {
    let outputElement = document.getElementById("input");
    let output = outputElement.value;
    let operators = '+-*/%';

    if (input === '×')
    {
        input = '*';
    } 
    else if (input === '÷') {
        input = '/';
    }

    if (output === '0' && !operators.includes(input)) {
    outputElement.value = input;
    } 
    else if (operators.includes(input)) {
     appendOperator(input);
    }
    else if (input === '=') {
                
        try {
                   
           outputElement.value = eval(output);
        } catch (err) {
           outputElement.value = "Error";
        }
        } else {
               
            outputElement.value += input;
        }
//slice when getting more operators

function appendOperator(operator) {
    if (output.length > 0) {
        let lastChar = output[output.length - 1];
    if (operators.includes(lastChar)) {
        outputElement.value = output.slice(0, -1) + operator;
        }
    else {
        outputElement.value += operator;
        }
        }
    else {
                    
        outputElement.value += operator;
        }
     }
}
//All Clear

    function allClear(){
            document.getElementById('input').value="0";
 }
        
 //Backspace 

    function backspace(){
         const output=document.getElementById('input');
         output.value=output.value.slice(0,-1);
         if(output.value==="")
         {
            output.value='0';
         }
        }
        