
        const min=1;
        const max=100;
        const answer=Math.floor(Math.random()*(max-min+1))+min;
        
        
        let attempts=0;
        let guess;
        let running=true;
        
        while(running){
            document.getElementById("sub").onclick=function(){// listening to the onclick of submit button
                guess=document.getElementById("guess").value;//getting the input value
                guess=Number(guess);}//converting guess to interger
        
                    attempts ++;

                    if(guess<answer)
                {
                    document.getElementById("p1").textContent="The number is too low, Try going higher!";
                }
                else if(guess>answer){
                    document.getElementById("p1").textContent="The number is too high, Try going lower!";
                }
                else{
                    document.getElementById("p1").textContent=`Correct, the answer was ${answer} and it took you ${attempts} attempts.`;
                    
                    running=false;
                }
            }
        
            