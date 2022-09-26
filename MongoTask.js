let mongoose= require("mongoose");

let Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/wikipedia")
.then(()=>{console.log("connected")})
.catch((err)=>{console.log("error")})


let countrySchema= new Schema({  
    country:String, 
    capital:String, 
    area:{
        type:Number,
        minlength:7,
    },
    population:Number, 
    currency:String
});
//  let obj= mongoose.model("countries", countrySchema);

//  let obj1= new obj({
//     country:"USA",
//     capital: 'Washington', 
//     area: 9833520, 
//     population: 327167434,
//      currency: 'USD'
//  })
//  obj1.save().then(()=>{console.log("Obj1 is created")})

let Country= mongoose.model("Country",countrySchema);

// let countries= [
// 	{country: 'USA', capital: 'Washington', area: 9833520, population: 327167434, currency: 'USD'},
// 	{country: 'Italy', capital: 'Rome', area: 301340, population: 60483973, currency: 'EUR'},
// 	{country: 'Germany', capital: 'Berlin', area: 357386, population: 83000000, currency: 'EUR'},
// 	{country: 'Canada', capital: 'Ottawa', area: 3855100, population: 37242571, currency: 'CAD'},
// 	{country: 'China', capital: 'Beijing', area: 9596961, population: 1403500365, currency: 'CNY'},
// 	{country: 'Sweden', capital: 'Stockholm', area: 450295, population: 10223505, currency: 'SEK'},
// 	{country: 'India', capital: 'New Delhi', area: 3287263, population: 1324171354, currency: 'INR'},
// 	{country: 'Netherlands', capital: 'Amsterdam', area: 41543, population: 17302139, currency: 'EUR'}
// ];


// countries.forEach((value)=>{

// let country= new Country(value);
// country.save()
// })



//task select area >100000 and currency=EUR
//sort by alphabet and display only names

async function getNames(){
    let filter= await Country
                        .find()
                        .where('area').gt(100)
                        .where('country').equals('EUR')
                        .sort({country:1})
                        .select({country:true});
    console.log(filter);
}
getNames();
//task2 
//Replace EUR with EURO
async function updateUser(){
   await Country.updateMany({currency:'EUR'},
                            {currency:"EURO"},
                            ()=>console.log("currency updated!"));
}
// updateUser();


//Task 3
//Remove all population>100 000 000
async function DeleteUser(){
   await Country.deleteMany({population:{$gt:100000000}})
   //delete the countries having i billon population

}
DeleteUser();