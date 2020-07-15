var name = "Mars";
console.log(name);

var city = "San Francisco";
console.log(city);

var num = 7;
console.log(num);

var fruits = ["apple", "pear", "orange", "banana"];
console.log(fruits);

//while loop
var number = 10;
var init = 1;
while(init < number){
    console.log(init);
    init += 1;
}

var bigNum = 20;
var smallNum = 10;
while (smallNum < bigNum){
    console.log(smallNum);
    smallNum += 1;
}

//for loop
for (var i = 0; i < 8; i++){
    console.log(i);
}

for (var i=0; i<fruits.length; i++){
    // console.log(fruits[i]);
    var eachItem = fruits[i];
    console.log(eachItem);
}

//make array exercise
var weather = ["sunny", "rainy", "wendy"]
for (var i = 0; i<weather.length; i++){
    var eachItem = weather[i];
    console.log(eachItem);
}

const cars = ['Tesla', 'Honda', 'Toyota', 'Ford'];
console.log(cars);

for (let i=0; i<cars.length; i++){
    let eachCar = cars[i];
    console.log(eachCar);
}

//Objects
//key: value pairs

const margaret = {
    fullname: "Jihua Huang",
    age: 26,
    myLocation: 'San Francisco',
    placesTraveled: ["New York", "Miami", "Boston", "Hawaii"]
};

console.log(margaret);
console.log(margaret.myLocation);
console.log(margaret.placesTraveled[0]);

//instagram post object

const myCoolPost = {
    username: "@generalassembly",
    likes: 12000,
    comments: ['really cool post', 'nice', 'woah', 'javascript is cool'],
    caption: 'Day 3 of SEI',
    picture: 'https://instagram.com/generalassembly/.....',
    shares: 34
}

console.log(myCoolPost);

//add key and value
myCoolPost.mylocation = 'San Franciso';
console.log(myCoolPost);


let sentence = "I'm cool";
let sentence2 = 'I\'m cool too';


const FourthOfJuly = {
    username: "$ga"
};

FourthOfJuly.picture = 'https://instagram.com/....';
FourthOfJuly['likes'] = 15;
FourthOfJuly.comments = ['ok..'];
FourthOfJuly.caption = "writing code on the 4th";

console.log(FourthOfJuly);


//Functions
function sayHello(){
    console.log("Hello");
}
sayHello();

//function expression
const sayHelloAgain = function() {
    console.log("Hello Again");
}
sayHelloAgain();

//arrow function
const sayHelloFinal = () => {
    console.log("Hello for the last time");
}
sayHelloFinal();


//place holders
//pass value into funtion
const numbers = [1,2,3,4,5];
const otherNumbers = [40,50,60,70];

function printNumbers(num){
    console.log(num);
}

printNumbers(numbers);
printNumbers(otherNumbers);

function printArr(array){
    for(let i = 0; i<array.length; i++){
        let item = array[i];

        if(item < 60){
            console.log("This number is less than 60: " + item);
        }
        else{
            console.log("This number is greater than 60: " + item);
        }
    }
}
printArr(numbers);
printArr(otherNumbers);