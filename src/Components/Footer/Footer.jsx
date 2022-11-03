import React from 'react'
import "./Footer.modules.css"
export default function Footer() {
  return (
    <>
    <div className="footer text-center py-5 d-flex justify-content-center align-items-center">
        <div className='py-4'>
        <p>Copy Right &copy; Your Company | Design : <span>Hatem Mohamed</span></p>
        <ul className='list-unstyled d-flex justify-content-center m-0'>
            <li><i className="fab fa-facebook fa-2x"></i></li>
            <li><i className="fab fa-twitter fa-2x"></i></li>
            <li><i className="fab fa-instagram fa-2x "></i></li>
            <li><i className="fab fa-youtube fa-2x"></i></li>
            <li><i className="fab fa-google fa-2x"></i></li>
        </ul>
      
    
        </div>  
    
    </div>
    </>
  )
}
