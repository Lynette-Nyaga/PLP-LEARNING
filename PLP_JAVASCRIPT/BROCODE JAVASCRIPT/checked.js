const check=document.getElementById("check");
const visa=document.getElementById("visa");
const mastercard=document.getElementById("mastercard");
const paypal=document.getElementById("paypal");
const btn=document.getElementById("btn");
const sub=document.getElementById("sub");
const pay=document.getElementById("pay");

btn.onclick=function(){
    if(check.checked){
        sub.textContent=`You are subscribed!`;
    }
    else{
        sub.textContent=`You are NOT subscribed!`;
    }

    if(visa.checked){
        pay.textContent=`You are using visa to pay`;
    }
    else if(mastercard.checked){
        pay.textContent=`You are using Mastercard to pay`;
    }
    else if(paypal.checked){
        pay.textContent=`You are using Paypal to pay`;
    }
    else{
        pay.textContent=`Please choose a method to pay`;
    }
}