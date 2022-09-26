//Objective to Delete the collection(row) from the document 

let mongoose = require('mongoose');
//1 create a Schema --with mongose
let Schema= mongoose.Schema;
mongoose.connect("mongodb://localhost/users").then(()=>{ 
    console.log("Connected to MongoDB......");
}).catch((error)=>{ 
    console.log("something is wrongs");
})

//to maintain a critera for schema
let userSchema= new Schema({
    login:String, 
    password:{
        minLength:4, 
        type:String
    },
    age:Number,
    student:Boolean, 
    country:String

 });
//2 CLass(modal) + object  --with js
let User = mongoose.model('User', userSchema);
// let user1= new User({
//     login:'Tom',
//     password:'0000', 
//     age:3,
//     student:false, 
//     country:"Germany"
//  });
//  console.log(user1)
//  user1.save().then(()=>{ 
//     console.log('Done!!');
// });
 //delete
//  async function removeUser(){
//     let result= await User.deleteOne({login:"Peter"})
//     console.log(result);
//  }
async function removeUser(){
    let result= await User.deleteMany({login:"Khushi Agarwal"},{login:"Om"})
    console.log(result);
 }

 removeUser();
 //in O/P --{ acknowledged: true, deletedCount: 1 }