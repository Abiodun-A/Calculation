var Operation = prompt("What operation will you like to perform?\n Pick any of the following ['+', '-'. '/', '*'. '%']: ")
var firstNumber = prompt("First number is: ")
var secondNumber = prompt("Second number is: ")
if(Operation==='+'){
    alert(parseFloat(firstNumber) + parseFloat(secondNumber))
}
if(Operation==='-'){
    alert(parseFloat(firstNumber) - parseFloat(secondNumber))
}
if(Operation==='/'){
    alert(parseFloat(firstNumber) / parseFloat(secondNumber))
}
if(Operation==='*'){
    alert(parseFloat(firstNumber) * parseFloat(secondNumber))
}
if(Operation==='%'){
    alert(parseFloat(firstNumber) % parseFloat(secondNumber))
}



