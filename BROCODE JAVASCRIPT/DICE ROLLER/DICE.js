function rollDice(){
    const num=document.getElementById("num").value;
    const diceResult=document.getElementById("diceResult");
    const diceimages=document.getElementById("diceimages");

    const values=[];// all of the dice rolls in numbers i.e= number 1 to 6.
    const images=[];


    for (let i=0; i<num; i++){
        const value=Math.floor(Math.random()*6)+1;//generating random numbers
        values.push(value);// pushing the random number into the values array
        images.push(`<img src="DICEIMAGES/${value}.jpeg">`);
    }
    diceResult.textContent=`Dice: ${values.join(',')}`;
    diceimages.innerHTML=images.join('');
}