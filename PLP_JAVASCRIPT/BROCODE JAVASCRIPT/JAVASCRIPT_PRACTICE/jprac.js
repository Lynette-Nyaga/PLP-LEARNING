const PI=3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick=function(){
radius=document.getElementById("input").value;
radius=Number(radius);
circumference=2*radius*PI;
document.getElementById("h2").textContent=`circumference: ${circumference} cms`;
}

let Name;
document.getElementById("submit1").onclick=function(){
    Name=document.getElementById("input1").value;
    document.getElementById("h11").textContent=`Hello ${Name}, Please Proceed to doing your calculation`;
}

let area;
let length;
let width;
document.getElementById("submit2").onclick=function(){
    length=document.getElementById("input2").value;
    length=Number(length);}
document.getElementById("submit3").onclick=function(){
        width=document.getElementById("input3").value;
        width=Number(width);
area=length*width;
document.getElementById("h3").textContent=`Area: ${area}cm`}

let Radius;
let Height;
let volume;
document.getElementById("submit4").onclick=function(){
    Radius=document.getElementById("input4").value;
    Radius=Number(Radius);}
document.getElementById("submit5").onclick=function(){
    Height=document.getElementById("input5").value;
    Height=Number(Height);
volume=PI*(Radius*Radius)*Height;
document.getElementById("vol").textContent=`Volume is : ${volume}cm`;}
