// creating a express server:

const express = require('express')
const mongoose = require('mongoose');


const app = express()
app.use(express.json())
const port = 3000

//creating the schema for User 
const userSchema=new mongoose.Schema({
    FirstName:String,
    LastName:String,
    useremail:String,
    password:String,
});

// Creating the model
const User=mongoose.model('User',userSchema);

// Setting connection with the database.
mongoose.connect('',{useNewUrlParser:true,useUnifiedTopology:true,dbName:'User'})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})