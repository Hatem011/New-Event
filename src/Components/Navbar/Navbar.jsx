import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-dark fixed-top w-100">
  <div className="container">
    <a className="navbar-brand" href="#">New <span>Event</span> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Overview</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Speakers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Programs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Vend</a>
        </li> <li className="nav-item">
          <a className="nav-link" href="#">Sponsors</a>
        </li> <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
