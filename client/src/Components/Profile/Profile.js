import React,{useState} from 'react'
import style from './Profile.module.css'
import axios from 'axios'

function Profile() {
  
  const [first,setFirst]=useState('');
  const [last,setLast]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [add,setAdd]=useState('');

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

  const FetchUserData=async()=>{

    const res=await axios.put("https://localhost:3000/Profile",{
      FirstName:first,
      LastName:last,
      useremail:email,
      Phone:phone,
      Address:add
    }).catch(error =>{
      //handle error
      console.log("Error in SignUp");
    })
    
  }

  return (
    <div>
      <div className={style.container1}>
        <div className={style.container11}>
           <h3>User Information</h3>
           <p>Personal Details</p>
        </div>
        <div className={style.container12}>
           <p className={style.btn}>Cancel</p>
           <p className={style.btn} onClick={FetchUserData}>Save</p>
        </div>
      </div>
      <hr/>

      <div >
        <div className={style.container21} >
          <label htmlFor="FirstName">First Name</label>
          <div className={style.inputbox}>
            <input className={style.input} onChange={handleFirst} value={first} type="text" id="FirstName" />
          </div>
        </div>
        <hr/>
        <div className={style.container21}>
          <label htmlFor="LastName">Last Name</label>
          <div className={style.inputbox}>
            <input className={style.input} onChange={handleLast} value={last} style={{marginLeft:".2%"}} type="text" id="LastName" />
          </div>
        </div>
        <hr/>
        <div className={style.container21}>
          <label htmlFor="Email">Email address</label>
          <div className={style.inputbox}>
            <input className={style.input} onChange={handleEmail} value={email} style={{marginRight:"1.5%"}} type="email" id="Email" />
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
