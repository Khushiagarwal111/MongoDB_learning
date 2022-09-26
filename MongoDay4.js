//Objective TO Update the collection(row) from Document(database) 

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

//  getUsers();
// TO update the Document or a collection(row)
//method 1
//  async function updateUser(){
//     let user= await User.findOne({login:'Peter'});
//     user.password="5678000000000000"
//     await user.save();
//     console.log("Updatesd the document!!!");
//  }

updateUser();
//Method 2 to Update the document directly
//it will change only one parameter
async function updateUser(){
User.findOneAndUpdate({login:'Peter'},{age:86},()=>{console.log("Updated the age and password of the document!!!");});

}

updateUser();
