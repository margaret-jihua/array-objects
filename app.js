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