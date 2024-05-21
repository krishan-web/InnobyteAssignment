const nodemailer = require("nodemailer");
require('dotenv').config()


const createtransport=()=>{
    const transporter = nodemailer.createTransport({
    service:"hotmail",
    auth: {
        user: process.env.AUTHEMAIL,
        pass: process.env.PASSWORD,
      },
    });
    
    return transporter;
    };

    


    const sendOtp=({FirstName,otp,useremail})=>{
    
    const transporter=createtransport();
    // Example of sending an email
    const mailOptions = {
       from: process.env.AUTHEMAIL,  // Sender address
       to: `${useremail}`,   // List of recipients
       subject: 'Otp for Login', // Subject line
        html: `<p>Hello ${FirstName}! Here is your otp ${otp}</p>
               <p>It will expire in 50 seconds!</p>
              ` // HTML body
    };
  
    transporter.sendMail(mailOptions, (error,info) => {
       if (error) {
         return console.log(error);
       }
    console.log('Message sent: %s',info.messageId);
  });
}

module.exports={sendOtp};