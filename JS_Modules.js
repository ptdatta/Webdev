//same as python OS
const fs =require("fs");   //importing a module
let text=fs.readFileSync("text.txt","utf-8")
console.log(text);
text=text.replace("you","Partib");
console.log(text);

fs.writeFileSync("parthib.txt",text);
var a="\nYou are a very lucky boy";
fs.appendFileSync("parthib.txt",a)

