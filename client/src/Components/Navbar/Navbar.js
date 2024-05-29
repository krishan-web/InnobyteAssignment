import React from 'react'
import { Link } from 'react-router-dom';
import style from './Navbar.module.css'
import {useRecoilValue,useSetRecoilState} from 'recoil';
import { userState } from '../../Recoil/atom';
// import { useNavigate } from 'react-router-dom';

function Navbar() {
  
  // Getting the Recoil atom userState  
  const userEmail=useRecoilValue(userState);
  const setUser=useSetRecoilState(userState);
  // const navigate=useNavigate();

  console.log(userEmail);
  if(localStorage.token && userEmail){
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary text-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-success fs-4 fw-bold"  to="/">InnoByte</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse justify-content-between">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={style.profile}  aria-current="page" to="/Profile">Profile</Link>
          </li>
        </ul>
            <div className='d-flex justify-content-around mx-2 ' >
               <div className={style.Logbtn}>
                  <Link className={style.Log} onClick={()=>{
                   localStorage.removeItem('token');
                   setUser(null);
                  //  navigate('/Login')
                   }}>Log Out</Link>
               </div>
            </div>
        
      </div>
      </div>
      </nav>
    </div>
  )
  } else return (
    <div >
       <nav className="navbar navbar-expand-lg bg-body-tertiary text-primary">
  <div className="container-fluid">
    <Link className="navbar-brand text-success fs-4 fw-bold"  to="/">InnoByte</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={style.profile}  aria-current="page" to="/Profile">Profile</Link>
        </li>
      </ul>
        <div className='d-flex justify-content-around mx-2 ' >
          <div className={style.btn}>
             <Link className={style.otp}  to="/Login">Login</Link>/
             <Link className={style.otp} to="/otp">Otp</Link>
          </div>
        <Link className={style.btn} onMouseOver={(e)=>e.target.style.textDecoration="Underline"} 
          onMouseLeave={(e)=>e.target.style.textDecoration="none"}
          to="/Signup">Signup</Link>
       </div>
    </div>
  </div>
</nav>
    </div>
  )


}

export default Navbar
