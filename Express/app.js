const express=require("express")
const path=require("path")
const fs=require("fs")
const app=express();
const port=80;

//Express specific stuff
app.use('/static',express.static('static'))   // For serving static files
app.use(express.urlencoded())

//PUG specific stuff
app.set('view engine','pug')   // Set the template as pug
app.set('views',path.join(__dirname,'./views'))    // Set the views directory



//Endpoints
// Our pug demo directory
app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title:'hey parthib',message:'hello there thanks for telling me about pugG'});
});
app.get("/",(req,res)=>{
    const con="this is the best content on pug"
    const param={'title':"Pubg is the best game","content":con}
    res.status(200).render('index.pug',param);
});

app.post("/",(req,res)=>{
   name=req.body.name
   age=req.body.age
   gender=req.body.gender
   address=req.body.address
   more=req.body.more
   let Output=`\nThe name of the client id ${name},${age} years old,residing at ${address},more about ${more} is ${gender}`
   fs.appendFileSync('Output.txt',Output)
    const param={'message':"Your form has been submitted successfully"}
    res.status(200).render('index.pug',param);
});

// app.get("/",(req,res)=>{
//     res.status(400).send("This is my first express app with parthib");
// });

app.get("/about",(req,res)=>{
    res.send("This is about of my first express app with parthib");
});

app.post("/about",(req,res)=>{
    res.send("This is post request about of my first express app with parthib");
});
app.post("/this",(req,res)=>{
    res.status(600).send("This is post request about of my first express app with parthib.hello");
});


//Start the server
app.listen(port,()=>{
    console.log(`the application stared successfully on port ${port}`);
});

// use 'nodemon' to quick restart