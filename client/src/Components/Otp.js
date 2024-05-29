import React,{useState} from 'react'
import style from './Login/Login.module.css'
import { useNavigate } from 'react-router-dom';
import {useSetRecoilState} from 'recoil';
import axios from 'axios'
import { userState } from '../Recoil/atom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card() {

  const setUser=useSetRecoilState(userState); // accessing the recoil atom state
  
  const [email,setEmail]=useState(''); // state
  const [otp,setOtp]=useState();  // state
  
  const navigate=useNavigate(); // To navigate b/w components

  const handleEmail = (event) => {  // handling the email event
    setEmail(event.target.value);
  };
const handleotp = (event) => {  // handling the otp event
    setOtp(event.target.value);
  };

const notify=()=>{    // toast
  toast.success('Logged In!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // transition: {Slide}
    });
}  


const otpnotify=()=>{
  toast.success('Otp send!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // transition: {Slide}
    });
}  

  // To get otp 
  const getOtp=async()=>{
    const res=await axios.post("http://localhost:3001/user/otp",{  // Making a request to server for an otp 
        useremail:email,
    }).catch(error=>{
        console.log("Failed to make a request",error);
    })
    otpnotify();
    console.log(res.data);
  }
   
  // To fetch the data from the backend(db).
  const FetchUserData=async()=>{
      const res=await axios.post("http://localhost:3001/user/OtpLogin",{ // otpLogin request made   
        useremail:email,
        resOtp:otp
      }).catch(error=>{
        //To handle error
        console.log(error);
      })
      const data=res.data;
      localStorage.setItem('token',data.token);  // setting the token in local storage
      setUser({email});
      notify();
      setTimeout(()=>{
        navigate('/');
      },5000)
  } 
  

  return (
    <div className={style.container}>
    <div className={style.card}>
            <h1 className={style.box}>InnoByte</h1>
            <div className={style.box1}>
                <div className={style.box11}>
                <input className={style.input} value={email} onChange={handleEmail} type="text" id="Useremail" placeholder='Enter the Email'/>
                <div className={style.sendemail}><p className={style.send} onClick={getOtp}>Send</p></div>
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
    <ToastContainer
theme="dark"
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
{/* // transition={ Slide}, */}

    </div>
  )
}

export default Card
