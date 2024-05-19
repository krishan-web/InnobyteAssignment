// creating a express server:
const express = require('express')
const mongoose = require('mongoose')
// JSON Web Tokens (JWTs)
const jwt =require('jsonwebtoken')
const crypto=require('crypto');
const { sendVerifyEmail } = require('./utils/sendVerifyEmail');
require('dotenv').config()

const app = express()
app.use(express.json())
const port = 3000
// SECRET key for token.
const SECRET='hi169lm';


//creating the schema for User 
const userSchema=new mongoose.Schema({
    FirstName:String,
    LastName:String,
    useremail:String,
    password:String,
    isVerified:{type:Boolean, default:false},
    emailToken: String
});

// Creating the model
const User=mongoose.model('User',userSchema);

// Setting connection with the database.
mongoose.connect('mongodb+srv://mongo:Krishan123@user.nylbwcs.mongodb.net/',{dbName:'User'})

// middleware for the user authentication 
const userauthentication=(req,res,next)=>{

     const auth=req.headers.authorization; // Getting the token
     if(auth){
        const token=auth.split(' ')[1];
        jwt.verify(token,SECRET,(err,user)=>{ //verifying the token
            if(err) return res.sendStatus(403);
            // This user information is then attached to the req object for use in subsequent middleware functions or route handlers. 
            res.user=user;
            next();
        })
     }else {
        res.status(401).json({message:"Error! Token invalid."})
     }
}

// signup or register 
app.post('/Signup',async(req,res)=>{
    const {FirstName,LastName,useremail,password}=req.body;
    const valueExist=await User.findOne({useremail}); // Searching for the useremail exist or not
    if(valueExist){
        res.status(403).json({message:'User already existed!'});
    }else{
        const newuser=await User.create({FirstName,LastName,useremail,password,emailToken:crypto.randomBytes(64).toString('hex')}); // newuser created with their details
        sendVerifyEmail(newuser);
        const token=jwt.sign({password},SECRET,{expiresIn:'1hr'}) // Token created
        res.status(200).json({message:"User created successfully",token});
    }
})

// Login 
app.post('/Login',async(req,res)=>{
    const {useremail,password}=req.body;
    const valueExist=await User.findOne({useremail,password});
    if(valueExist){
          const token=jwt.sign({password},SECRET,{expiresIn:'1hr'}); // Token created 
          res.json({message:'Logged in Successfully',token});
    }else {
          res.status(403).json({message:'Invalid Credential'});
    }
})

app.put('/Profile',userauthentication,async(req,res)=>{
    const {FirstName,LastName,useremail,password}=req.body;
    const valueExist=await User.findOne({useremail}); // Searching for the useremail exist or not
    console.log(valueExist.FirstName,LastName,password);
    if(valueExist){
        await User.updateMany({FirstName,LastName,useremail,password});
        res.json({message:"Updated Successfully"});
    }else{
        res.json({message:"Doesn't Exist"});
    }
     
})

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})