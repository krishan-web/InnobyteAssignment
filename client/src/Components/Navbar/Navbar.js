import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  
  return (
    <div >
       <nav className="navbar navbar-expand-lg bg-body-tertiary text-primary">
  <div className="container-fluid">
    <Link className="navbar-brand text-success" to="/">InnoByte</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-secondary" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
        <div className='d-flex justify-content-around mx-2 ' >
        <Link className=' mx-2 my-2 align-items-center' style={{cursor:"pointer",textDecoration:"none"}} to="/Login">Login</Link>
        <Link className='mx-1 my-2 align-items-center' style={{cursor:"pointer",textDecoration:"none"}} to="/Signup">Signup</Link>
       </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
