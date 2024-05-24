import React,{useState} from 'react'
import style from './Login/Login.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Card() {

  const [email,setEmail]=useState('');
  const [otp,setOtp]=useState();
  const navigate=useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
const handleotp = (event) => {
    setOtp(event.target.value);
  };


  // To get otp 
  const getOtp=async()=>{
    const res=await axios.post("https:localhost:3000/otp",{
        useremail:email,
    }).catch(error=>{
        console.log(error);
    })
    console.log(res.data);
  }
   
  // To fetch the data from the backend(db).
  const FetchUserData=async()=>{
      const res=await axios.post("https:localhost:3000/OtpLogin",{
        useremail:email,
        resOtp:otp
      }).catch(error=>{
        //To handle error
        console.log(error);
      })
      const data=res.data;
      localStorage.setItem('token',data.token);
      navigate('/');
  } 
  

  return (
    <div className={style.container}>
    <div className={style.card}>
            <h1 className={style.box}>InnoByte</h1>
            <div className={style.box1}>
                <div className={style.box11}>
                <input className={style.input} value={email} onChange={handleEmail} type="text" id="Useremail" placeholder='Enter the Email'/>
                <div className={style.sendemail}><p className={style.send}>Send</p></div>
                </div>
                <div className={style.box11}>
                <input className={style.input} value={otp} onChange={handleotp}  type="text" id="password" placeholder='Enter the Otp'/> 
                </div>
                <div >
                    <p className={style.box12} onClick={FetchUserData}>Submit</p>
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
