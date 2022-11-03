import React from 'react'
import "./Register.css"
export default function Register() {
  return (
    <>
    <div className="register text-white  p-5">
<div className="container d-flex">
    <div className="register-text">
        <h2>Register <span>Here</span></h2>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod doloremque debitis laboriosam aliquam ex consequatur error commodi sapiente ipsa.</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quas maiores quo ex possimus cumque? Soluta, quo. In tempora vel iusto minus. Consequuntur dolorem voluptate quia. Dolores consequatur id sint.</p>
    </div>
    <div className="register-form">
        <input type="text" placeholder='First Name' className='d-block form-control mb-2'/>
        <input type="text" placeholder='Last Name' className='d-block form-control mb-2'/>
        <input type="number" placeholder='Number'className='d-block form-control mb-2' />
        <input type="email" placeholder='Email Address'className='d-block form-control mb-2'/>
        <button className='btn btn-danger'>Register</button>
    </div>
</div>
    </div>
    
    </>
  )
}
