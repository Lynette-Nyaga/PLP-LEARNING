    const textbox1=document.getElementById("textbox1");
    const toKM=document.getElementById("toKM");
    const toM=document.getElementById("toM");
    const result1=document.getElementById("result1");
    let distance;

    function convert1(){//defined in the html button input
        if(toKM.checked){
            distance=Number(textbox1.value); //converting input to number/integer
            distance=distance*1.609;//math conversion from celcius to farenheit
            result1.textContent=distance + "Kms";//changing the content of the result
        }else if(toM.checked){
            distance=Number(textbox1.value);
            distance=distance/1.609;
            result1.textContent=distance.toFixed(4) +"Miles";//TOFIXED converts to 4 decimal places
        }else{
            result1.textContent="Select a unit";
        }
    }

    const textbox=document.getElementById("textbox");
    const toF=document.getElementById("toF");
    const toC=document.getElementById("toC");
    const result=document.getElementById("result");
    let temp;

    function convert(){//defined in the html button input
        if(toF.checked){
            temp=Number(textbox.value); //converting input to number/integer
            temp=temp*9/5+32;//math conversion from celcius to farenheit
            result.textContent=temp + "\u00B0 F";//changing the content of the result
        }else if(toC.checked){
            temp=Number(textbox.value);
            temp=(temp-32)+(5/9);
            result.textContent=temp.toFixed(2)+"\u00B0 C";
        }else{
            result.textContent="Select a unit";
        }
    }

