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
let operate= function(operator, num1, num2){
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
//numbers
for(let i=0;i<10;i++){
    let button=document.createElement("button");
    button.textContent=i;
    buttons.appendChild(button);
}
//operators
