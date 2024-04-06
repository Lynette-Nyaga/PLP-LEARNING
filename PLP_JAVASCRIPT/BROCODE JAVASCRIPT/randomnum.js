const roll=document.getElementById("roll");
const lab=document.getElementById("lab");
const min=1;
const max=6;
let randomnum;

roll.onclick=function(){
    randomnum=Math.floor(Math.random()*max)+ min;
    lab.textContent=randomnum;
}



