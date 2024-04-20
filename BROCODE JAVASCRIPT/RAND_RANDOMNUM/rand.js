const roll1=document.getElementById("roll1");
const lab1=document.getElementById("lab1");
const lab2=document.getElementById("lab2");
const lab3=document.getElementById("lab3");


const min1=1;
const max1=6;

let randomnum1;
let randomnum2;
let randomnum3;

roll1.onclick = function(){
    randomnum1=Math.floor(Math.random()*max1)+ min1;
    randomnum2=Math.floor(Math.random()*max1)+ min1;
    randomnum3=Math.floor(Math.random()*max1)+ min1;
    lab1.textContent=randomnum1;
    lab2.textContent=randomnum2;
    lab3.textContent=randomnum3;
}