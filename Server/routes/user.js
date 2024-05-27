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
        sendVerifyEmail(newuser);
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

router.post('/otp',async(req,res)=>{
    const {useremail}=req.body;
    const valueExist=await User.findOne({useremail});
    if(valueExist){
          otp=Math.floor(Math.random()*9000+1000);
          otp_hour=otp_time.getHours()+1;
          const Name=valueExist.FirstName;
          sendOtp(Name,otp,useremail);
    }else {
          res.status(403).json({message:'Invalid Credential'});
    }
}
)

// OTP based Login
router.post('/OtpLogin',async(req,res)=>{
    const {useremail,resOtp}=req.body;
    const valueExist=await User.findOne({useremail});
    if(valueExist){
          if(otp_time.getHours()<otp_hour){
            if(resOtp==otp){
              const token=jwt.sign({useremail},SECRET,{expiresIn:'1hr'}); // Token created 
              res.json({message:'Logged in Successfully',token});
            }else {res.status(403).json({message:'Invalid Credential'});}
          }else {res.status(403).json({message:'Request OTP'});}
    }else {
          res.status(403).json({message:'Invalid Credential'});
    }
})


router.put('/Profile',userauthentication,async(req,res)=>{
    const {FirstName,LastName,useremail,Phone,Address}=req.body;
    const valueExist=await User.findOne({useremail}); // Searching for the useremail exist or not
    //console.log(valueExist.FirstName,LastName,password);
    if(valueExist){
        await User.updateMany({useremail},{$set:{FirstName,LastName,Phone,Address}});
        res.json({message:"Updated Successfully",Address,Phone});
    }else{
        res.json({message:"Doesn't Exist"});
    }
     
})

router.get('/data', userauthentication,async(req, res) => {

    const user1 = await User.findOne({ useremail: res.useremail });
    const [FirstName,LastName,useremail,emailToken,Address,Phone]=[user1.FirstName,user1.LastName,
           user1.useremail,user1.emailToken,user1.Address,user1.Phone]; 
    res.json({message:"Data of user",FirstName,LastName,useremail,emailToken,Address,Phone});  

})

module.exports=router