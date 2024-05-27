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

  
  const sendVerifyEmail=(user)=>{
  
    const transporter=createtransport();
    // Example of sending an email
    const mailOptions = {
       from: process.env.AUTHEMAIL,  // Sender address
       to: `${user.useremail}`,   // List of recipients
       subject: 'Verify your email', // Subject line
        html: `<p>Hello ${user.FirstName}! Verify Your Email by clicking this link</p>
               <a href="http://localhost:3001/Email?emailToken=${user.emailToken}">Verify your email!</a>` // HTML body
    };
  
    transporter.sendMail(mailOptions, (error,info) => {
       if (error) {
         return console.log(error);
       }
    console.log('Message sent: %s',info.messageId);
  });
}

module.exports={sendVerifyEmail};