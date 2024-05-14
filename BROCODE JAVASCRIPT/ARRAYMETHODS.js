// array methods

// let names=["lynette", "june", "steve", "mildred", "brenda", "grace", "dad", "john"];
// for(name of names){
//     console.log(name);
    
// }
// console.log(names.sort().reverse());

// SPREAD OPERATOT-allows an iterable such as an array or string to be expanded into seperate elemennts.

// let numbers=[101, 12, 34, 42, 56, 68, 87, 89, 90, 22, 35];
// let max=Math.max(...numbers);
// let min=Math.min(...numbers);
// console.log(`The maximum number is : ${max}`);
// console.log(`The minimum number is : ${min}`);

//Joining two arrays with the spread operator

// let fruits=["apple", "mango", "banana", "kiwi", "orange", "strawberry"];
// let veges=["kales", "spinach", "managu", "dania", "sagaa"];
// let foods=[...fruits, ...veges, "milk", "honey", "eggs"];//when joining, use square bracket.
// console.log(foods);

//REST PARAMETER- it allows a function to work with a variable number of arguments by bundling(putting them together)
//into an array.
// function openFridge(...foods){
//     console.log(...foods);
// }
// let food1="ugali,";
// let food2="rice,";
// let food3="nyama,";
// let food4="smokies,";
// let food5="Githeri";

// openFridge(food1,food2,food3,food4,food5);

//CALLBACK- a function that is passed as an argument to another function
//They are used to handle asynchronous operations.

// function hello(wait){
//     console.log("hello Lynette");
// }
// function wait(){
//     console.log("Wait");
// }

// hello(wait);


//foreach-method used to iterate over the elements of an array and apply a specified function(callback)
//to each element


// let numbers=[1,2,3,4,5,6,7,];
// numbers.forEach(display);
// function display(){
//     console.log(element);
// }
// display();
