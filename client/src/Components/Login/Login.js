import React,{useState} from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {useSetRecoilState} from 'recoil';
import { userState } from '../../Recoil/atom';

function Card() {

  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const setUser=useSetRecoilState(userState);
  const navigate=useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
const handlePass = (event) => {
    setPass(event.target.value);
  };
   
  // To fetch the data from the backend(db).
  const PostUserData=async()=>{
      const res=await axios.post("http://localhost:3001/user/Login",{
        useremail:email,
        password:pass
      }).catch(error=>{
        //To handle error
        console.log(error);
      })
      const data=res.data;
      setUser({email});
      console.log(data);
      localStorage.setItem('token',data.token);
      navigate('/');
  } 
  

  return (
    <div className={style.container}>
    <div className={style.card}>
            <h1 className={style.box}>InnoByte</h1>
            <div className={style.box1}>
                <div className={style.box11}>
                <input className={style.input} value={email} onChange={handleEmail} type="text" id="Useremail" placeholder='Email'/>
                </div>
                <div className={style.box11}>
                <input className={style.input} value={pass} onChange={handlePass}  type="text" id="password" placeholder='Password'/> 
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

export default Card
