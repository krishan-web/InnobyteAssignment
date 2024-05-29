import React, { useEffect } from 'react'
import style from './Email.module.css'
import axios from 'axios';

function Email() {
  
  const init=async()=>{
    const emailtoken=localStorage.getItem('emailtoken');
    const useremail=localStorage.getItem('useremail');
    const res=axios.put("http://localhost:3001/user/Email",{
      useremail:useremail,
      emailtoken:emailtoken
    }).catch((err)=>console.log("Error in Axios request",err));

    console.log(res);
  }

   useEffect(()=>{
    init();
    
   },[])  

  return (
    <div className={style.container}>
         <h1 className={style.h1}>Email Verified</h1>   
         <p className={style.p}>Welcomes you at InnoByte!</p>
    </div>
  )
}

export default Email
