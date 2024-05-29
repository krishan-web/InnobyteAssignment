import React, { useState } from 'react'
import style from './Signup.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useSetRecoilState} from 'recoil';
import { userState } from '../../Recoil/atom';


function Signup() {
  // state for firstName,LastName,email & pass.   
  const [first,setFirst]=useState('');
  const [last,setLast]=useState('');
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');

  const navigate=useNavigate();

  const setUser=useSetRecoilState(userState); // using atom set State

  // handling Events for firsName, lastName, email, pass
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
  
     // Function to create an acccount
    const PostUserData=async()=>{

      const res=await axios.post("http://localhost:3001/user/Signup",{  // made backend request to server 
        FirstName:first,
        LastName:last,
        useremail:email,
        password:pass
      }).catch(error =>{ // handling the axios error.it could be url error 
        //handle error
        console.log("Error in SignUp");
      })
      // console.log(res);
      setUser({email});
      const data=res.data;
      // console.log(res);
      localStorage.setItem('token', data.token);
      localStorage.setItem('useremail',email);
      localStorage.setItem('emailtoken',data.emailtoken);
      navigate('/EmailVerify');
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
            <p className={style.box12} onClick={PostUserData}>Submit</p>
        </div>
    </div>
    <div className={style.box2}>
              <div className={style.box21}>
               <p className={style.Login} onClick={()=>navigate("/Login")}>Login</p>/
               <p className={style.otp} onClick={()=>navigate("/otp")}>Otp</p>
              </div>
               <p className={style.sign} onClick={()=>navigate("/Signup")}>Signup</p>
            </div>
   </div>
</div>
  )
}

export default Signup
