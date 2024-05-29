// creating a express server:
const express = require('express')
const mongoose = require('mongoose')
// JSON Web Tokens (JWTs)
const jwt =require('jsonwebtoken')
// const bcrypt= require('bcrypt')
const crypto=require('crypto');
const { sendVerifyEmail } = require('../utils/sendVerifyEmail');
const { sendOtp } = require('../utils/sendOtp');
const {User}=require("../db");
const {userauthentication,SECRET}=require("../middleware/auth");
require('dotenv').config()

const router=express.Router();

var otp=0;
const otp_time=new Date();
var otp_hour=0;

// signup or register 
router.post('/Signup',async(req,res)=>{
    const {FirstName,LastName,useremail,password}=req.body;
    // console.log(FirstName,LastName,useremail,password);
    const valueExist=await User.findOne({useremail}); // Searching for the useremail exist or not
    if(valueExist){
        res.status(403).json({message:'User already existed!'});
    }else{
        const newuser=await User.create({FirstName,LastName,useremail,password,emailToken:crypto.randomBytes(64).toString('hex')}); // newuser created with their details
        sendVerifyEmail(newuser); // sending the mail
        const token=jwt.sign({useremail,password},SECRET,{expiresIn:'1hr'}) // Token created
        const emailtoken=newuser.emailToken;
        res.status(200).json({message:"User created successfully",token,emailtoken});
    }
    // console.log('Hello world bro.')
})

// Login 
router.post('/Login',async(req,res)=>{
    const {useremail,password}=req.body;
    const valueExist=await User.findOne({useremail,password});
    if(valueExist){
          const token=jwt.sign({useremail,password},SECRET,{expiresIn:'1hr'}); // Token created 
          console.log("Login done")
          res.json({message:'Logged in Successfully',token});
    }else {
          res.status(403).json({message:'Invalid Credential'});
    }
})

//sending the otp 
router.post('/otp',async(req,res)=>{
    const {useremail}=req.body;
    const valueExist=await User.findOne({useremail});
    if(valueExist){
          otp=Math.floor(Math.random()*9000+1000); // to create an otp of random number
          otp_hour=otp_time.getHours()+1;  // Time after which it will expire
          const Name=valueExist.FirstName;
          sendOtp(Name,otp,useremail); // sending otp to mail
    }else {
          res.status(403).json({message:'Invalid Credential'});
    }
}
)

// OTP based Login
router.post('/OtpLogin',async(req,res)=>{
    const {useremail,resOtp}=req.body; // requesting for the body
    const valueExist=await User.findOne({useremail});
    if(valueExist){  // user existed or not
          if(otp_time.getHours()<otp_hour){
            if(resOtp==otp){ // checking the otp
              const token=jwt.sign({useremail},SECRET,{expiresIn:'1hr'}); // Token created 
              res.json({message:'Logged in Successfully',token}); // making the response
            }else {res.status(403).json({message:'Invalid Credential'});}
          }else {res.status(403).json({message:'Request OTP'});}
    }else {
          res.status(403).json({message:'Invalid Credential'});
    }
})

// Updating the User profile
router.put('/Profile',userauthentication,async(req,res)=>{
    const {FirstName,LastName,useremail,Phone,Address}=req.body;
    const valueExist=await User.findOne({useremail}); // Searching for the useremail exist or not
    //console.log(valueExist.FirstName,LastName,password);
    if(valueExist){
        await User.updateMany({useremail},{$set:{FirstName,LastName,Phone,Address}}); // Updating the profile of user
        res.json({message:"Updated Successfully",Address,Phone});
    }else{
        res.json({message:"Doesn't Exist"});
    }
     
})

//Fetching the user Data to display
router.get('/data', userauthentication,async(req, res) => {

    const user1 = await User.findOne({ useremail: res.useremail });
    const [FirstName,LastName,useremail,emailToken,Address,Phone]=[user1.FirstName,user1.LastName,
           user1.useremail,user1.emailToken,user1.Address,user1.Phone]; 
    res.json({message:"Data of user",FirstName,LastName,useremail,emailToken,Address,Phone});  

})

// Verifying the email
router.put('/Email',async(req,res)=>{
    const {useremail,emailtoken}=req.body; // reqest for the data
    const verify=await User.findOne({useremail});
    if(verify){  // User Existed or not
        if(verify.emailToken==emailtoken){
          await User.updateOne({useremail},{$set:{isVerified:true}});  // updating the isVerified in user db 
          res.status(200).json({message:'Successful'});
        }else res.sendstatus(403);
    }else res.status(403).json({meassge:"User does not exist"});
})


module.exports=router // exporting the router