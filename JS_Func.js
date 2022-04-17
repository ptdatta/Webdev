function greet(name){
    console.log(name + " is a good boy");
}
function greet(name, greetText="Greeting from javascript"){
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}
var name = "Harry";
var name1 = "Shubham";
var name2 = "Rohan";
var name3 = "Sagar";
greet(name);
greet(name1);
greet(name2);
greet(name3);

var greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);

let returnVal = greet(name3);
console.log(returnVal)

function sum(a,b,c){
    let d = a + b + c;
    return d;
}
let s = sum(1,2,3);
console.log(s);