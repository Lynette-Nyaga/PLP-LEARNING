function happybirthday(){//a function without parameters
    let message= "Happy birthday to you";
    let message1="Happy birthday dear Dylan";
    console.log(message.repeat(2));
    console.log(message1);
    console.log(message);// This function will not display as it has not been called.
}
function hello(name, age){//a functions with parameters
    console.log(`Hello ${name}`);//ensure you pass the correct parameters 
    console.log(`Congratulations on celebrating ${age} years`); //double check the parameters to ensure they are okay.

}
//hello(120, "Tom");//calling function hello & passing in the parameters.

function add(x,y){
    
    let num1=x+y;
    console.log(`${x}+ ${y} results to ${num1}`);
    
    

}
    //(add(435,876));

function multiply(a,b,c){
    let answer=a*b*c;//define what to do with the parameters first
    console.log(`when someone multiplies ${a} by ${b} by ${c}, They get ${answer}.`)
}
    //multiply(70,19,54); calling and passing in parameters.

    //OR
function multiply(a,b,c){
    return a*b*c;
}
//console.log(multiply(70,19,54));// same as the code above.
function isEven(num1){
    return num1 %2===0;}
    //console.log(isEven(37));

    

