const { response } = require("express");

function updatemap(){
   fetch("/data.json")
   .then(response=> response.json())
   .then(data=>{
       console.log(data)
   })
}

updatemap();