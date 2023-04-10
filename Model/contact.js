const mongoose=require('mongoose')


const SchemaContact=mongoose.Schema({
    FirstName:String,
    LastName:String,
    Age:Number,
    Adress:String,
    Email:{type: String, require:true},
    favoriteFoods:  String 
   
})








module.exports=mongoose.model('SchemaContact',SchemaContact)