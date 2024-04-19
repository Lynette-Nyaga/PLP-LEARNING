const min=1;
const max=100;
const answer=Math.floor(Math.random()*(max-min+1))+min



let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt('Enter a number between 1 && 100');
    guess=Number(guess);

    

    if (isNaN(guess)){
        window.aler("please enter a valid number!");
    }else if (guess<min||guess>max){
        window.alert('Please enter a valid number!');
    }else{
        attempts ++;
        if(guess<answer){
            window.alert('Too low, try again!');
        }else if(guess>answer){
            window.alert('Too high, try again');
        }else{
            window.alert(`Correct !!!!!, the answer was ${answer} and it took you ${attempts} attempts`);
            running=false;
        }
    }
}
