import React from 'react'
import Sponsersdata from "./Data"
import "./Sponsers.css"
export default function Sponsers() {
  return (
    <>
<div className="sponsers text-center my-5">
    <div className="container">
        <h2 className='pb-2'>Our <span>Sponsers</span></h2>
        <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem labore voluptatibus.</p>
        <div className="row">
{Sponsersdata.map((item,i)=>{
    return(
<div className="col-md-3" key={i}>
                <div className="sponsers-item">
                    <img src={item.src} className='w-100' alt={item.alt} />
                </div>
            </div>
    )
})}
            
          
        </div>
    </div>
</div>
    </>
  )
}
