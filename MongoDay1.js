//Mongo Db is an open source
//NoSQL database  management progam 
// MongoDBis a non relational based Document Database 
//that provides support for JSON-Loke Storage
//Mongo db database flexible data model 
//that enables you to store unstructed data
//It provides full indexing support 
//replication with rich and intitutive APIs


//install mongo db and mongo compass
//run mongod --an error will come that will show shutting down database 
//so make directory ://data/db
//add environment variables to that 
//complete the install of mongo db compass 


let mongoose = require('mongoose');
//1 create a Schema --with mongoose
let Schema= mongoose.Schema;
mongoose.connect("mongodb://localhost/users").then(()=>{ 
    console.log("Connected to MongoDB......");
}).catch((error)=>{ 
    console.log("something is wrongs");
})
