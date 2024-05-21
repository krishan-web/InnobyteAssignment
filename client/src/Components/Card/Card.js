import React from 'react'
import style from './Card.module.css'

function Card() {
  return (
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
                <p>Login</p>
                <p>Signup</p>
            </div>
    </div>
  )
}

export default Card
