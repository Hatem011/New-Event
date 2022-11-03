import React from 'react'
import img_about from "../../images/overview-img.jpg"
export default function About() {
  return (
    <>
    <div className="container mt-5 py-5">
        <div className="row">
        <div className="col-md-6">
            <div className="about-content">
<h5 className=''>New Event Is fully Responsive one page template for events conference and workshops</h5>
<p className="pt-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nesciunt aliquam eligendi ex, voluptatum asperiores minus.
</p>
<p >
Lorem, ipsum dolor sit amet consectetur adipisicing elitamet consectetur adipisicing elitamet consectetur adipisicing elit. Quisquam optio eius atque repellendus minima illo vero voluptatum unde ad sapiente.
</p>
            </div>
        </div>
        <div className="col-md-6">
            <div className="about-img">
               <img src={img_about} alt="" className='w-100' />
            </div>
        </div>
        </div>
    </div>
    
    </>
  )
}
