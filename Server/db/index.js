const mongoose = require('mongoose')

//creating the schema for User 
const userSchema=new mongoose.Schema({
    FirstName:{type:String,isrequired:true},
    LastName:String,
    useremail:{type:String,isrequired:true},
    password:{type:String,isrequired:true},
    emailToken: String,
    Phone:Number,
    Address:String,
    isVerified:{type:Boolean, default:false},
});

// Creating the model
const User=mongoose.model('User',userSchema);

module.exports={
    User
}