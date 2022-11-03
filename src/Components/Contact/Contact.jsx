import React from 'react'
import "./Contact.css"
export default function Contact() {
  return (
    <>
    <div className="contact py-5">
        <div className="contact-content d-flex">
            <div className="contact-text">
                <div>
                <h2>New <span>Event</span></h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum nesciunt impedit libero modi nisi necessitatibus sit quae iste dolore?</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit ratione iure magni temporibus porro quaerat animi voluptatum incidunt ducimus.</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error velit ratione iure magni temporibus porro quaerat animi voluptatum incidunt ducimus.</p>
<button className='btn btn-primary'>Download Now</button>
                </div>
            </div>
            <div className="contact-form">
                <form action="">
                    <h2 className='pt-5'>Keep In Touch</h2>
                    <input type="text" placeholder='Name' className='w-100 pt-3' />
                    <input type="email" placeholder='Email' className='w-100' />
                    <input type="text" placeholder='Message' className='w-100'  />
                    
                    <button className='btn btn-dark my-4 w-25'>Send</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
