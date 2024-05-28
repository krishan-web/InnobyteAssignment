// creating a express server:
const express = require('express')
const mongoose = require('mongoose')
// JSON Web Tokens (JWTs)
const jwt =require('jsonwebtoken')
const crypto=require('crypto');
cors = require('cors');

const userRouter=require('./routes/user');
const port = 3001

require('dotenv').config()

const app = express()
app.use(express.json())

app.use(cors());
app.use("/user",userRouter);

// Setting connection with the database.
mongoose.connect('mongodb+srv://mongo:Krishan123@user.uwkuqey.mongodb.net/',{dbName:'User'});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})