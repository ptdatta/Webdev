//it connect mongoDB with node js

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/parthibkart', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    //we are connected!
    console.log("we are connected ..")
})


const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function speak() {
    const greeting = "My name is " + this.name;
    console.log(greeting);
  };

const Kitten = mongoose.model('Parthibkitty', kittySchema);

const parthibkitty = new Kitten({ name: 'parthibkitty' });
const parthibkitty2 = new Kitten({ name: 'parthibkitty2' });
// console.log(parthibkitty.name); 
// parthibkitty.speak();

parthibkitty.save(function(err,parthibkitty2){
    if(err) return console.error(err);
    // parthibkitty.speak;
})
parthibkitty2.save(function(err,parthibkitty2){
    if(err) return console.error(err);
    // parthibkitty2.speak;
})

Kitten.find({name:"parthibkitty2"},function(err,kittens){
    if(err) return console.error(err);
    console.log(kittens)
})

