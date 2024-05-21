import React from 'react'

function Navbar() {
  return (
    <div >
       <nav className="navbar navbar-expand-lg bg-body-tertiary text-primary">
  <div className="container-fluid">
    <a className="navbar-brand text-success" href="#">InnoByte</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-secondary" aria-current="page" href="#">Home</a>
        </li>
      </ul>
        <div className='d-flex justify-content-around mx-2 ' >
        <p className=' mx-2 my-2 align-items-center'>Login</p>
        <p className='mx-1 my-2 align-items-center'>Signup</p>
       </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
