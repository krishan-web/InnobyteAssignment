import React, { useState } from 'react'
import style from './Signup.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    
  const [first,setFirst]=useState('');
  const [last,setLast]=useState('');
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');

  const handleFirst = (event) => {
    // console.log(event.target.value);
    setFirst(event.target.value);
  };
const handleLast = (event) => {
    // console.log(event.target.value);
    setLast(event.target.value);
  };
  
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
const handlePass = (event) => {
    setPass(event.target.value);
  };
  
    const navigate=useNavigate();

    const FetchUserData=async()=>{
      console.log({first},{last},email,pass);
      const res=await axios.post("http://localhost:3000/Signup",{
        FirstName:first,
        LastName:last,
        useremail:email,
        password:pass
      }).catch(error =>{
        //handle error
        console.log("Error in SignUp");
      })
      console.log(res);
      const data=res.data;
      localStorage.setItem('token', data.token);
      navigate('/');
    }

  return (
    <div className={style.container}>
    <div className={style.card}>
    <h1 className={style.box}>InnoByte</h1>
    <div className={style.box1}>
        <div className={style.box11}>
        <input className={style.input} onChange={handleFirst} value={first} type="text" id="FirstName" placeholder='FirstName'/>
        </div>
        <div className={style.box11}>
        <input className={style.input} onChange={handleLast} value={last} type="text" id="LastName" placeholder='LastName'/> 
        </div>
        <div className={style.box11}>
        <input className={style.input} onChange={handleEmail} value={email} type="text" id="Useremail" placeholder='Email'/>
        </div>
        <div className={style.box11}>
        <input className={style.input} onChange={handlePass} value={pass} type="text" id="password" placeholder='Password'/> 
        </div>
        <div >
            <p className={style.box12} onClick={FetchUserData}>Submit</p>
        </div>
    </div>
    <div className={style.box2}>
        <p onClick={()=>navigate("/Login")}>Login</p>
        <p onClick={()=>navigate("/Signup")}>Signup</p>
    </div>
   </div>
</div>
  )
}

export default Signup
