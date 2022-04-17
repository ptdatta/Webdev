//Use in one line-->
show dbs
use parthibkart
show collection

// Inserting database in mongodb
db.items.insertOne({name:"Samsung A50s",price:10000,rating:4.5,qty:233,sold:98})
db.items.insertMany([{name:"Samsung A50s",price:10000,rating:4.5,qty:233,sold:98},{name:"Pixel 6",price:56000,rating:4.5,qty:233,sold:98},{name:"Iphone 13 pro",price:100000,rating:4.6,qty:278,sold:233,isbig:true}])


//Searching for data in mongodb
db.items.find({filter ele}) 
eg->db.items.find({price:10000}) 
    db.items.find({price:{$gte:45000}}) 
    //gte=>greater than or equalto
    // gt=>greater than
    // lt=>lesser than
    //lte=>lsser than or equalto
// ,=>And query
db.items.find({price:{$gt:45000},rating:{$gt:4.5}})
// $or=>or query
db.items.find({
    $or:[
        {price:{$gt:45000}},{rating:{$gte:4.5}}]
    })
//Projection
db.items.find({price:{$gte:45000}},{price:1,qty:1}) //only price and qty
    

//Deleting  of data in mongodb
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteOne({price: 10000})
db.items.deleteMany({price: {$gte:70000}})


//Updating  of data in mongodb
db.items.updateOne({name: "Pixel 6"}, {$set: {price: 70000,"sold":100}})
db.items.updateMany({name: "Samsung A50s"}, {$set: {price: 3, rating: 1}})
db.items.updateMany({name: "Samsung A50s"},{$set:{"name":Mi}})
