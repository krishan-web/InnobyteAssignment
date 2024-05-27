import React,{useEffect, useState} from 'react'
import style from './Profile.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import { set } from 'mongoose';

function Profile() {

  const [first,setFirst]=useState('');
  const [last,setLast]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState();
  const [add,setAdd]=useState('');
  const navigate=useNavigate();

  const handleFirst = (event) => {
    setFirst(event.target.value);
  };

  const handleLast = (event) => {
    setLast(event.target.value);
  };
  
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
   
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleAdd=(event)=>{
    setAdd(event.target.value);
  }

  const PostUserData=async()=>{
    const token=localStorage.getItem('token');
    
    const res=await axios.put("http://localhost:3000/Profile",{
      FirstName:first,
      LastName:last,
      useremail:email,
      Phone:phone,
      Address:add
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).catch(error =>{
      //handle error
      console.log("Error in SignUp");
    })

    console.log(res.data.Address);
  }
  
  
  const init=async()=>{
    const token=localStorage.getItem('token');
    if(token){
      const res=await axios.get("http://localhost:3000/data",{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).catch(error=>{console.log(error,"error in data")});
      // const data=await JSON.stringify(res);
      console.log(res);

      setEmail(res.data.useremail);
      setFirst(res.data.FirstName);
      setLast(res.data.LastName);
      setPhone(res.data.Phone);
      setAdd(res.data.Address);
      // eslint-disable-next-line
    }else navigate("/Login");
  }

   useEffect(()=>{
    init();
    // eslint-disable-next-line
  },[])

  const UserValue=()=>{
    init();
  } 

  return (
    <div>
      <div className={style.container1}>
        <div className={style.container11}>
           <h3>User Information</h3>
           <p>Personal Details</p>
        </div>
        <div className={style.container12}>
           <p className={style.btn} onClick={UserValue}>Cancel</p>
           <p className={style.btn} onClick={PostUserData}>Save</p>
        </div>
      </div>
      <hr/>

      <div >
        <div className={style.container21} >
          <label htmlFor="FirstName">First Name</label>
          <div className={style.inputbox}>
            <input className={style.input} onChange={handleFirst} value={first} type="text" id="FirstName"  />
          </div>
        </div>
        <hr/>
        <div className={style.container21}>
          <label htmlFor="LastName">Last Name</label>
          <div className={style.inputbox}>
            <input className={style.input} onChange={handleLast} value={last} style={{marginLeft:".2%"}} type="text" id="LastName"  />
          </div>
        </div>
        <hr/>
        <div className={style.container21}>
          <label htmlFor="Email">Email address</label>
          <div className={style.inputbox}>
            <input className={style.input} onChange={handleEmail} value={email} disabled={true} style={{marginRight:"1.5%"}} type="email" id="Email" />
          </div>
        </div>
        <hr/>
        <div className={style.container21}>
          <label htmlFor="Phone">Phone Number</label>
          <div className={style.inputbox}>
            <input className={style.input} onChange={handlePhone} value={phone} style={{marginRight:"2%"}} type="text" id="Phone" />
          </div>
        </div>
        <hr/>
        <div className={style.container21}>
          <label htmlFor="Address">Address</label>
          <div className={style.inputbox} >
             <input className={style.input} onChange={handleAdd} value={add} style={{marginLeft:"1%"}} type="text" id="Address" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
