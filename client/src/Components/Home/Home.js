import React from 'react'
import style from './Home.module.css'

function Home() {
  return (
    <div className={style.box}>
        <div>
          <h1 className={style.h1}>Hello InnoByte!</h1>
           <p className={style.name}>I'm Krishan Chand</p>
           <p className={style.skill}>(Reactjs and Nodejs Developer)</p>
        </div>
        <div className={style.box1}>
        <img className={style.img} src="https://as2.ftcdn.net/v2/jpg/07/06/01/83/1000_F_706018382_8CGgZrFvXd5svKotoiHT7msuAaPNW0a9.jpg" alt="error" />
        </div>
    </div>
  )
}

export default Home
