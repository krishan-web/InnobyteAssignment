import React from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom';

function Card() {

    const navigate=useNavigate();

  return (
    <div className={style.container}>
    <div className={style.card}>
            <h1 className={style.box}>InnoByte</h1>
            <div className={style.box1}>
                <div className={style.box11}>
                <input className={style.input} type="text" id="Useremail" placeholder='Email'/>
                </div>
                <div className={style.box11}>
                <input className={style.input} type="text" id="password" placeholder='Password'/> 
                </div>
                <div >
                    <p className={style.box12}>Submit</p>
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

export default Card
