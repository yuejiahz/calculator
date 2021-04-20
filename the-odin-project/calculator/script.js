//add number key buttons and event listener
const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach(numberButton => numberButton.addEventListener('click', numberInput));

//add calculation input buttons and event listener
const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(functionButton => functionButton.addEventListener('click', operatorInput));

//add calc and clear button
document.getElementById('calc').addEventListener('click', operate);
document.getElementById('clear').addEventListener('click', clear);
window.addEventListener('keydown', numpadInput);


//create arrays and variables
var numberArray = [];
var displayArray = [];
var storedNumber = [];
var StoredOperator = [];
let num, firstNum, secondNum, number, firstOperator, secondOperator, answer;
let count = 0;
let numberCount = 0;
let calculationCount = 0;
let decimalCount = 0;
let decimalCountIndex;

 function numpadInput(e){
    if(e.key=='+'||e.key=='-'||e.key=='*'||e.key=='/'||e.key=='End') {
        if(e.key=='+') status='+';
        if(e.key=='-') status='-';
        if(e.key=='*') status='*';
        if(e.key=='/') status='/';
        if(e.key=='End') status='+/-';
        operatorInput(e);
    }
    if(!isNaN(e.key)){
        if(e.key=='0') num=0;
        if(e.key=='1') num=1;
        if(e.key=='2') num=2;
        if(e.key=='3') num=3;
        if(e.key=='4') num=4;
        if(e.key=='5') num=5;
        if(e.key=='6') num=6;
        if(e.key=='7') num=7;
        if(e.key=='8') num=8;
        if(e.key=='9') num=9;
        if(e.key=='0') num=0;
    numberInput(e); 
    } 
    if(e.key=='.'){ 
        num='.';
        numberInput(); 
    }
    if(e.key=='Enter') operate(e);
    if(e.key=='Delete') clear();
 }
function numberInput(e) {
    if(e) {
        if(e.type=='click')  num = e.target.innerText;
    }
    if (decimalCount == 0 || !(num == '.')) {
        count++;
        numberArray[count] = num;
        displayArrays(num);
        number = parseFloat(numberArray.join(''));
    }

    if (num == '.') {
        decimalCountIndex = count;
        decimalCount = 1;
        console.log(decimalCountIndex);
    }
}

function operatorInput(e) {
    if(e){
        if(e.type=='click') status = e.target.id;
    }
 
    //call to set negative or positive number
    if (status == '+/-' && number) {
        number = negativeNumber(number);
    }
    else {
        if ((!firstOperator && !isNaN(displayArray[numberCount-1]) || (firstOperator && !isNaN(displayArray[numberCount-1])))) {
            displayArrays(status);
        }
        //register the latest operator input during multiple input 
        if (firstOperator && !number) {
            numberCount--;
            displayArrays(status);
            calculationCount = 0;
            firstOperator = '';
        }
        operate();
    }
    status = '';
}

//change number into positive or negative value
function negativeNumber(num) {
    num = num * -1;
    for (i = numberCount - count; i <= numberCount; i++) {
        displayArray[i] = '';
    }
    numberCount--;
    displayArrays(num);
 
   if(!(numberArray[0]=='-')){ 
       numberArray.splice(0,0,'-');
   console.log(numberArray);
   count++;
}
    else if (numberArray[0]=='-') {
      numberArray.splice(0,1);
   console.log(numberArray);
  }
    return num;
}

function operate(e) {
    //assign numbers and operator into variables into first and second order 
    if (!firstOperator && calculationCount === 0) {
        if (number) firstNum = number;
        firstOperator = status;

    }
    if (firstOperator && firstNum && calculationCount === 1) {
        secondNum = number;
        secondOperator = status;

    }
    calculationCount = 1;

    if (e) calculationCount = 0;

    //setting the only number input as answer
    if (firstNum && !firstOperator && !secondNum & !secondOperator && e) {
        answer = firstNum;
    }   
     if (firstNum && firstOperator && e && isNaN(displayArray[numberCount-1])) {
        answer='ERROR';
    }

    //call calculation functions according to operator input
    if(firstNum && secondNum){
    if (firstOperator === '+') answer = add(firstNum, secondNum);
    if (firstOperator === '-') answer = subtract(firstNum, secondNum);
    if (firstOperator === '*') answer = multiply(firstNum, secondNum);
    if (firstOperator === '/') {
        if ((secondNum === 0)) answer = 'ERROR';
        if (!(secondNum === 0)) answer = divide(firstNum, secondNum);
    }
}
    //assign value shifting after calculation and call solution display
    if (!isNaN(answer)) {
        if (!(answer == Math.floor(answer)) && !(isNaN(answer)) && ((firstOperator == '*') || firstOperator == '/')) {
            answer = answer.toFixed(8);
        }
        solutionDisplay(answer);
        if(secondNum) firstNum = parseFloat(answer);
        if (secondOperator) firstOperator = secondOperator;
        secondOperator = '';
        secondNum = '';
        answer = '';
    }
     else if(answer=='ERROR') solutionDisplay(answer);

    numberArray = [];
    count = 0;
    number = '';
    decimalCount = 0;
}

//display calculation on screen
function displayArrays(content) {
   if(numberCount<25){
    displayArray[numberCount] = `${content}`;
    document.getElementById('display').textContent = displayArray.join("");
    numberCount++;
   }
    if(numberCount==25){
        numberCount=0;
        displayArray=[];
        displayArray[numberCount]=number+num;
        numberCount++;
    }
}

//display solution on screen
function solutionDisplay(answer) {
    document.getElementById('solution').textContent = `${answer}`;
}

//restore everything to original state 
function clear() {
    displayArray = [];
    numberArray = [];
    answer = '';
    numberCount = 0;
    calculationCount = 0;
    count = 0;
    decimalCount = 0;
    firstNum = '';
    secondNum = '';
    firstOperator='';
    secondOperator='';
    num='';
    number='';
    decimalCountIndex='';
    document.getElementById('display').textContent = '';
    document.getElementById('solution').textContent = '';

}

//calculation functions
function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}
function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}