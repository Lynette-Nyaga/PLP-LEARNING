// let age=101;
// let agegroup;

// switch(true){
//     case age>0 &&age<=3:
//         agegroup="Toddler";
//         console.log(`You are a ${agegroup}`);
//         break;
//     case age>3 && age<=7:
//         agegroup="Child";
//         console.log(`You are a ${agegroup}`);
//         break;
//     case age>7 && age<=12:
//         agegroup="Pre-teen";
//         console.log(`You are a ${agegroup}`);
//         break;
//     case age>12 && age<20:
//         agegroup="Teenager";
//         console.log(`You are a ${agegroup}`);
//         break;
//     case age>=20 && age<=35:
//         agegroup="Youth";
//         console.log(`You are a ${agegroup}`);
//         break;
//     case age>35 && age<=50:
//         agegroup="Adults";
//         console.log(`You are a ${agegroup}`);
//         break;
//     case age>50:
//         agegroup="Senior citizen";
//         console.log(`You are a ${agegroup}`);
//         break;
//     default:
//         agegroup="unknown";
// }

// let score= 87;
// let grade;

// switch(true){
//     case score>= 0 && score<30:
//         grade="E";
//         console.log(`You scored an ${grade}.`);
//         break;
//     case score>30 && score <50:
//         grade="D";
//         console.log(`You scored a ${grade}.`);
//         break;
//     case score>50 && score <65:
//         grade="C";
//         console.log(`You scored a ${grade}.`);
//         break;
//     case score>65 && score <80:
//         grade="B";
//         console.log(`You scored a ${grade}.`);
//         break;
//     case score>80 && score <100:
//         grade="A";
//         console.log(`You scored an ${grade}.`);
//         break;
//     default:
//         console.log("Please check your marks and Enter valid marks")        
// }


// repeat, charAt, indexOf, lastIndexOf, toLowerCase, toUpperCase
// trim, startsWith,endsWith, includes, replace, replaceAll, padStart, padEnd
// name="lynette";
// console.log(name.padEnd(10, "e"));

//string slicing
// let information="Lynette Kananu Nyaga,0711101122,Kenya,SoftwareDeveloper 2";
// let info=information.replaceAll(" ", ",");
// console.log(info);
// let info1=info.split(",");

// let fname=info1[0].trim();
// let mname=info1[1].trim();
// let lname=info1[2].trim();
// let phone=info1[3].trim();
// let country=info1[4].trim();
// let occupation=info1[5].trim();
// let numberOfChildren=info1[6].trim();

// console.log(`FirstName: ${fname}`);
// console.log(`MiddleName: ${mname}`);
// console.log(`LastName: ${lname}`);
// console.log(`PhoneNumber: ${phone}`);
// console.log(`Country: ${country}`);
// console.log(`Specialty: ${occupation}`);
// console.log(`No of Kids: ${numberOfChildren}`);


//method chaining

// let city="LONDON";
// city=city.trim().charAt(0).toUpperCase()+ city.trim().slice(1).toLowerCase();

// let info=city!=="Nairobi"? `Is ${city} as fun as Nairobi?`: "I hope you are enjoying the cool weather of Nairobi";
// console.log(info);

// let number="";
// while(number<10){
//     number=window.prompt('Please enter a number\nThe number should b more than 10');
// }
// window.alert(number);

// let loggedIn=false;
// let userName;
// let password;

// while(!loggedIn){
//     userName=window.prompt("Enter your username");
//     password=window.prompt("Enter a valid password");

//     if(userName==="lynette" && password==="Lynn@30"){
//         loggedIn=true;
//         window.alert("you have successfully logged in");
//     }else{
//         window.alert("Please check your credentials and try logging in again");
//     }
// };

// let user;
// let password;
// let loggedIn;

// while(!loggedIn){
//     user=window.prompt("Enter your name:");
//     password=window.prompt("Enter your password");

//     const userName=user;
//     const Password= password;
//     if(user===userName &password===Password){
//         loggedIn=true;
//         window.alert("You have successfully logged in");
//     }else if(password!==Password){
//         window.alert("Please check your password");
//     }else if(user!==userName){
//         window.alert("please check your UserName");
//     }else{
//         window.alert("check your login credentials");
//     }
// }

//For Loop//
// name="lynn";
// number=10;

// for(let i=name.length; i<=number; i++){
//    if(i>6){
//     console.log("this is a big number");
//    }else{
//     console.log(`hello ${name}`);
//    } 
// }


//number geussing game
// const min=1;
// const max=20;
// const answer=Math.floor(Math.random()*(max-min))+min;

// let attempts=0;
// let guess;
// let running=true;

// while(running){
//     guess=window.prompt(`Guess a number between ${min} - ${max}`);
//     guess=Number(guess);

//     if(isNaN(guess)){
//         window.alert("please enter a valid number");
//     }else if(guess<min||guess>max){
//         window.alert("please enter a valid number");
//     }else{
//         attempts ++;
//         if(guess<answer){
//             window.alert("Too low, try guessing a higher number");
//         }else if(guess>answer){
//             window.alert("Too high, try guessing a smaller number");
//         }else{
//             window.alert(`CORRECT!!, the answer was ${answer} and you made ${attempts} attempts.`);
//             running=false;
//         }
//     }
// }

//letter guessing Game

// let fLetter="A";
// let lLetter="Z";
// let answer = function randomString(length){
//     const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let result="";
//     for(let i=0; i<length;i++){
//         result +=chars.charAt(Math.floor(Math.random()*chars.length));
//     }
//     return result;
// };

// let attempts=0;
// let guess;
// let running=true;

// while(running){
//     guess=window.prompt(`Enter a letter between ${fLetter} and ${lLetter}.`);
//     guess=String(guess);

//     if(!String(guess)){
//         window.alert("please enter a valid letter");
//     }else if(guess<indexOf(fLetter)||guess>indexOf(lLetter)){
//         window.alert("please enter a valid letter");
//     }else{
//         attempts ++;
//         if(guess<indexOf(answer)){
//             window.alert("Too low, try guessing a letter towards 'Z");
//         }else if(guess>indexOf(answer)){
//             window.alert("Too far, try guessing a letter towards 'A");
//         }else{
//             window.alert(`CORRECT!!, the answer was ${answer} and you made ${attempts} attempts.`);
//             running=false;
//         }
//     }
// // }
// let fLetter = "a"; // Valid letter range starts at lowercase "a"
// let lLetter = "z"; // Valid letter range ends at lowercase "z"
// let answer = "";
// let attempts = 0;

// function generateRandomLetter() {
//   answer = ""; // Reset answer for new game
//   answer = String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Generate random lowercase letter (a-z)
// }

// function giveFeedback(guess) {
//   guess = guess.toLowerCase(); // Convert guess to lowercase

//   if (guess < fLetter || guess > lLetter) {
//     window.alert= "Please enter a valid letter between A and Z.";
//   } else if (guess < answer) {
//     window.alert= "Too low, try guessing a letter towards 'z'";
//   } else if (guess > answer) {
//     window.alert="Too high, try guessing a letter towards 'a'";
//   } else {
//     window.alert= "CORRECT! The answer was " + answer + ". You made " + attempts + " attempts.";
//   }
// }

// generateRandomLetter(); // Generate initial random letter

// while (true) {
//   attempts++;
//   const guess = prompt("Enter your guess:");
//   const feedback = giveFeedback(guess);
//   window.alert(feedback);

//   if (feedback.startsWith("CORRECT")) {
//     break; // Exit loop on win
//   }
// }

//FUNCTIONS IN JS
// function name() {
//   myname = "Andrew";
//   message = `${myname} loves Declan and Dylan very much`;
//   console.log(`${message.repeat(5).replace(/much/g, 'much. ').trim()}.`);
// }
// name();
             
//                             OR


// function name(){
//   myname="Andrew";
//   message=`${myname} loves Declan and Dylan very much. `;
//   console.log(`${message.repeat(5)}.`);
// }
// name();

// function greetings(name, time){  //FUNCTION WITH 2 PARAMETERS
//   afternoon="Good afternoon";
//   morning="Good morning";
//   evening="Good evening";
//   console.log(`${afternoon} ${name}, it is ${time}`);
// }
// greetings("Mildred", "2.30 PM");


// function add(x,y){
//   sum= x+y;
//   console.log(` The sum of ${x} and ${y} is ${sum}`);
// }
// add(45, 78);


// function multiply(a, b, c, d){
//   return a*b*c*d;
// }
// console.log(`the answer is ${multiply(21,5,67, 98)}`);



// function division(a, b, c){
//   return a/b/c;

// }
// console.log(`72 divided by 2 and later divided by 2 results to ${division(72,2,2)}.`);



// function isOdd(num1){
//   return num1%2!==0;
// }
// console.log(isOdd(39));


// function isEven(num1, num2){
//   return num1%2===0 && num2%2===0;
 
// } console.log(`It's ${(isEven(27,29))} that both numbers are even?`);


// function isOdd(num1, num2, num3){
//   return num1%2!==0 && num2%2!==0 && num3%2!==0;
// }
// console.log(`Its ${isOdd(20,23,49)} that all numbers are odd`);


// function validEmail(email){
//  return email.includes('@');
// }
// console.log(`its ${validEmail("lkn.g.com")} that this email is valid`);

//ARRAYS

// let fruits=["apple", "Banana", "strawberry", "mango", "berries" ];
// let numberOfFruits=fruits.length;
// console.log(`The fruit array has ${numberOfFruits} fruits.`);

// let fruits=["apple", "Banana", "strawberry", "mango", "berries" ];
// let indexA=fruits.indexOf("apple");
// let indexB=fruits.indexOf("Banana");
// console.log(`Apple is at index ${indexA} and banana is at index ${indexB}.`);

// let fruits=["apple", "banana", "strawberry", "berries", "mango"];
// for(i=0;i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// let fruits=["apple", "banana", "kiwi", "orange"];
// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// let names=[ "june","mildred", "dylan","declan"];
// for(name of names){
//     console.log(name);
// }


// let towns=["chuka", "nairobi", "meru", "kisumu", "nakuru"];
// for(i in towns){
//     console.log(towns[i]);
// }
// for(town of towns){
//     console.log(town);
// }

// let names=[ "june","mildred", "dylan","declan"];
// for(i in names){
//     console.log(names[i]);
// }
// console.log(names.sort());
// console.log(names.sort().reverse());

//SPREAD OPERATOR
// let numbers=[1,2,3,4,5,6,7,8,9];
// let max=Math.max(...numbers);
// console.log(max);

// let numbers=[1,2,3,4,5,6,7,8,9];
// let min=Math.min(...numbers);
// console.log(`The minimum number is ${min}.`);

// let name = "lynette Nyaga";
// let name2 = [...name].join("-");
// console.log(name2);

// let fruits=["apple", "mango", "banana"];
// let veges=["kales", "onions", "carots"];
// let foods=[...fruits, ...veges, "milk", "cabbage"];
// console.log(foods);

//REST PARAMETERS
// function openFridge(...foods){
//     console.log(...foods);
// }
// const food1="pizza";
// const food2="ugali";
// const food3="rice";
// const food4="matoke";
// const food5="beef";

// openFridge(food1, food2, food3, food4, food5);


// function identity(...names){
//     console.log(names);
// }
// let name1="lynette";
// let name2="kananu"; 
// let name3="nyaga";
// let name4="mildred";
// let name5="nyaga";

// OR PASS IN THE PARAMETERS WHEN CALLING THE FUNCTION

// identity("lynette", "kananu", "nyaga", "Declan", "liams");








// RANDOM PASSWORD GENERATOR

// function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
//     const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
//     const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const numbers = '0123456789';
//     const symbols = '!@#$%^&*()|\\/';

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowerCaseChars : "";
//     allowedChars += includeUppercase ? upperCaseChars : "";
//     allowedChars += includeNumbers ? numbers : "";
//     allowedChars += includeSymbols ? symbols : "";

//     if (passwordLength <= 0) {
//         return "Password length must be at least 1";
//     }

//     if (allowedChars.length === 0) {
//         return "At least one set of characters needs to be selected";
//     }

//     for (let i = 0; i < passwordLength; i++) {
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }
//     return password;
// }

// // Variable declarations and function call
// let passwordLength = 7;
// const includeLowercase = false;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = false;

// let password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
// console.log(`Generated password: ${password}`);

// function hello(){
//     console.log("hello lynn, good morning");
// }
// function bye(){
//     console.log("Good byee, see you later");
// }
// function wait(){
//     console.log('Please wait for some minutes');
// }
// hello(bye());
// wait(hello());
// bye(hello());

//FOR EACH()

// let numbers=[1,2,3,4,5,6,7,8,9];
// numbers.forEach(display);
// function display(element){
//     console.log(element);
// }


// function display(element){
//     console.log(element);
// }
// let numbers=[1,2,3,4,5,6,7];
// numbers.forEach(display);


// function display(element){
//     console.log(element);
// }
// let names=["lynn", "kananu", "Nyaga", "Declan", "Dylan", "myles", "liams"];
// names.forEach(display);


// function show(element, index){
//     console.log(`this is  ${element} element of the array at index ${index}`);
// }
// let names =["lynn", "kananu", "nyaga"];
// names.forEach(show);


// let schools=["njuri", "chuka Girls", "Muthambi girls", "Ngaita girls", "ndumbini"];
// schools.forEach(show);
// function show(element, index){
//     console.log(`${element} school is placed at index ${index} in the schools array`);
// }


// function capitalize(element, index, array){
//     array[index]= element.charAt(0).toUpperCase()+ element.slice(1);
//     console.log(array[index]);
// }
// let fruits=["apples", "bananas", "oranges"];
// fruits.forEach(capitalize);


// let fruits = ["apples", "bananas", "oranges"];
// let capitalizedFruits = fruits.map(element => element.charAt(0).toUpperCase() + element.slice(1));
// console.log(capitalizedFruits); // Output: ["Apples", "Bananas", "Oranges"]
// console.log(fruits); // Original array remains unchanged: ["apples", "bananas", "oranges"]





