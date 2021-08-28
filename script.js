//global storage variables, booleans to track stage of operation
let currentOperator;
let number1="0";
let number2="";
let opIsSelected=false;
let num1IsSelected=false;
let num2IsSelected=false;
let periodIsUsed=false;
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
    if(num2==0){
        return("Nice try")
    }
    else{
        return(num1/num2);
    }
}
let clear= function(){
    currentOperator="";
    number1="0";
    writeDisplay("0");
    number2="";
    opIsSelected=false;
    num1IsSelected=false;
    num2IsSelected=false;
    periodIsUsed=false;
    console.log("cleared");
}
//clear
let clearButton=document.querySelector("#clear");
clearButton.addEventListener("click", function(){
    clear();
});

//equal
let equalButton=document.querySelector("#equal");
equalButton.addEventListener("click", function(){
    //calculate answer
    if(opIsSelected&&num1IsSelected&&num2IsSelected){
        let answer=operate(currentOperator, number1, number2);
        //
        clear();
        number1=answer;
        num1IsSelected=true;
        writeDisplay(number1);
    }
});

//takes operator and 2 numbers and returns the result
let operate= function(operator, num1, num2){
    num1=parseFloat(num1);
    num2=parseFloat(num2);
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
for(let i=0;i<11;i++){
    let numButton=document.createElement("button"); 
    numButton.classList.add("numButton")
    numButton.textContent=i;
    if(numButton.textContent==10){
        numButton.textContent=".";
        numButton.id="period";
    }
    numButton.addEventListener("click", function(e){
        input=e.target.textContent;
        //take number2
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
        //take number1
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
    });
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
    operatorButtons[i].className="opButton";
    console.log(operatorButtons[i].classList);
    operatorButtons[i].addEventListener("click", function(e){
        if(num1IsSelected){
            //operate if operator clicked with full operation
            if(num2IsSelected){
                let answer=operate(currentOperator, number1, number2);
                writeDisplay(answer);
                console.log(answer);
                clear();
                number1=answer;
                num1IsSelected=true;
                writeDisplay(number1);
            }
            //set operator
            currentOperator=e.target.textContent;
            console.log(currentOperator);
            opIsSelected=true;
        }
    });
}


