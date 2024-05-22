import React from 'react'
import style from './Profile.module.css'

function Profile() {
  return (
    <div>
      <div className={style.container1}>
        <div className={style.container11}>
           <h3>User Information</h3>
           <p>Personal Details</p>
        </div>
        <div className={style.container12}>
           <p className={style.btn}>Cancel</p>
           <p className={style.btn}>Save</p>
        </div>
      </div>
      <hr/>

      <div >
        <div className={style.container21} >
          <label htmlFor="FirstName">First Name</label>
          <div className={style.inputbox}>
            <input className={style.input} type="text" id="FirstName" />
          </div>
        </div>
        <hr/>
        <div className={style.container21}>
          <label htmlFor="LastName">Last Name</label>
          <div className={style.inputbox}>
            <input className={style.input} style={{marginLeft:".2%"}} type="text" id="LastName" />
          </div>
        </div>
        <hr/>
        <div className={style.container21}>
          <label htmlFor="Email">Email address</label>
          <div className={style.inputbox}>
            <input className={style.input} style={{marginRight:"1.5%"}} type="email" id="Email" />
          </div>
        </div>
        <hr/>
        <div className={style.container21}>
          <label htmlFor="Phone">Phone Number</label>
          <div className={style.inputbox}>
            <input className={style.input} style={{marginRight:"2%"}} type="text" id="Phone" />
          </div>
        </div>
        <hr/>
        <div className={style.container21}>
          <label htmlFor="Address">Address</label>
          <div className={style.inputbox} >
             <input className={style.input} style={{marginLeft:"1%"}} type="text" id="Address" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
