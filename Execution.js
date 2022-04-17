// Synchronous or blocking-->line by line execution(1st line 1st,last last)
// Asynchronous or non-blocking-->line by line execution not guaranteed,callbacks will fire

const fs =require("fs");
fs.readFile("text.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("this is a message")