
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
//4 add object to document  --in mongodb\

//useful function in Node 
//1 find
// async function getUsers(){
//     let users= await User.find()
//     console.log(users);
//  }

//  getUsers();

 //2 limit
//  async function getUsers(){
//     let users= await User.find().limit(2)
//     console.log(users);
//  }

//  getUsers();
 //3 sort 
//  async function getUsers(){
//     let users= await User.find().limit(5).sort({age:1})
//     console.log(users);
//  }

//  getUsers();


 //4 select
//  async function getUsers(){
//     let users= await User.find()
//                         .limit(5)
//                         .sort({age:1})
//                         .select({login:true})
//     console.log(users);
//  }

//  getUsers();


 //5 where
 // 6 querry function for where clause :>, >=,<,=<, ===, !==
//where class greater than 2 and less than 25 years of age
 async function getUsers(){
    let users= await User.find()
                        .where('age').gt(2).lt(50)
                        // .limit(5)
                        .sort({age:1})
                        .select({login:true})
    console.log(users);
 }

