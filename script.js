//global storage variables, booleans to track stage of operation
let currentOperator;
let number1="0";
let number2="";
let opIsSelected=false;
let num1IsSelected=false;
let num2IsSelected=false;

//operations
let add= function(num1, num2){
    return(num1+num2);
}
let subtract= function(num1, num2){
    return(num1-num2);
}
let multiply= function(num1, num2){
    return(num1*num2);
}
let divide= function(num1, num2){
    return(num1/num2);
}
let clear= function(){
    currentOperator="";
    number1="0";
    writeDisplay("0");
    number2="";
    opIsSelected=false;
    num1IsSelected=false;
    num2IsSelected=false;
    console.log("cleared");
}
let clearButton=document.querySelector("#clear");
clearButton.addEventListener("click", function(){
    clear();
})
let equalButton=document.querySelector("#equal");
equalButton.addEventListener("click", function(){
    //calculate answer
    let answer=operate(currentOperator, number1, number2);
    writeDisplay(answer);
    console.log(answer);
    clear();
    number1=answer;
    num1IsSelected=true;
    writeDisplay(number1);
});

//takes operator and 2 numbers and returns the result
let operate= function(operator, num1, num2){
    num1=parseInt(num1);
    num2=parseInt(num2);
    if(operator=="-"){
        return(subtract(num1, num2));
    }
    if(operator=="+"){
        return(add(num1, num2));
    }
    if(operator=="*"){
        return(multiply(num1, num2));
    }
    if(operator=="/"){
        return(divide(num1, num2));
    }
}
//add buttons
let buttons=document.querySelector("#buttons");
let numbers=document.querySelector("#numbers");

//take input
let input;
let displayValue;
//numbers, listen for click and store in global
for(let i=0;i<10;i++){
    let numButton=document.createElement("button"); 
    numButton.textContent=i;
    numButton.addEventListener("click", function(e){
        input=e.target.textContent;
        //take number 1
        if(opIsSelected){
            //clear out 0
            if(number2=="0"){
                number2="";
            }
            number2=number2+input;
            num2IsSelected=true;
            console.log("num2 is "+number2);
            writeDisplay(number2);
        }
        else{
            //clear out 0
            if(number1=="0"){
                number1="";
            }
            number1=number1+input;
            num1IsSelected=true;
            console.log("num1 is "+number1);
            writeDisplay(number1);
        }
    })
    numbers.appendChild(numButton);
}
//display
let display= document.querySelector("#display");
let writeDisplay= function(item){
    display.textContent=item;
}
//operators, listen for click and store in global
let operatorButtons=document.querySelector("#operators").childNodes;
for(let i=0;i<operatorButtons.length;i++){
    operatorButtons[i].addEventListener("click", function(e){
        if(num1IsSelected){
            currentOperator=e.target.textContent;
            console.log(currentOperator);
            opIsSelected=true;
        }
    })
}


//execute
let execute= function(){

}

//a lot of variables and half started shit, clean up after this
//take number
//take operator
//take number
//enter for result