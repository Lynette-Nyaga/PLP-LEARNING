const textbox=document.getElementById("textbox");
const toF=document.getElementById("toF");
const toC=document.getElementById("toC");
const result=document.getElementById("result");
let temp;

function convert(){
    if(toF.checked){
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.textContent= temp.toFixed(2) + "°F";
    }else if(toC.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(2)+"°C";
    }else{
        result.textContent="Please select a unit";
    }
};

