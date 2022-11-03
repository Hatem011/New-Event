import React from 'react'
import overviewData from "./Data"
import "./Overview.css"
export default function Overview() {
  return (
    <>
      <div className="overview mt-5 py-5 text-center">
    <div className="container">
      <div className="row">
{
       overviewData.map((data,i)=>{
        return(
 <div className="col-md-4" key={i}>
        <div className="overview-item ">
            <i >{data.icon}</i>
            <h5 className='text-white'>{data.title}</h5>
            <p className='text-white-50 pb-3 '>{data.desc}</p>
        </div>
    </div> 
        )
       })
}
        </div>
      </div>
    </div>
    
    </>
  )
}
