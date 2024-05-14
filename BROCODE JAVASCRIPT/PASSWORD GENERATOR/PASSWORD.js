function genPassword(passwordLength, includelowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowerCase='abcdefghijklmnopqrstuvwxyz';
    const UpperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Numbers='0123456789';
    const Symbols='@!#$%&*';

    let allowedChars=''; //undefined characters
    let password=''; //empty  password

    allowedChars += includelowerCase? 'abcdefghijklmnopqrstuvwxyz': ''; //if includelowecase
    allowedChars += includeUpperCase? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ': '';
    allowedChars += includeNumbers?  '0123456789': '';
    allowedChars += includeSymbols?'@!#$%&*' : '';

    //Ensuring the length is more than 0
    if(length<=0){
        return`(password length must be at least 1)`;
    }
    // making sure that at least one of the categories is selcted
    if(allowedChars.length===0){
        return`(At least 1 set of characters needs to be selected)`;
    }
    for(let i=0; i<passwordLength; i++){
        const randomIndex=Math.floor(Math.random* allowedChars.length); //generating random numbers and xters
        //based on the number of allowed characters selected
        password += allowedChars[randomIndex];
    }
    return password;

} 
//setting the parameters
let passwordLength=10;
const includelowerCase=true;
const includeUpperCase=true;
const includeNumbers=true;
const includeSymbols=false;  

//calling the function and passing in the parameters required
const password=genPassword(passwordLength, includelowerCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(`generated password: ${password}`);