import React, { useState } from 'react';
import { SecondDayTab, ThirdDayTab, FirstDayTab } from './Data';
import "./Programs.css";
export default function Programs() {
    const [tab, setTab] = useState("FirstDayTab");
   const switchTab=(tab)=>{
        setTab(tab)
    }
  return (
    <>
<div className="programs my-5">
    <div className="container">
    <h2>Our <span>Programs</span></h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure minima aperiam sapiente. Et, necessitatibus earum.</p>
    <ul className='list-unstyled d-flex h6'>
        <li
         onClick={()=>switchTab("FirstDayTab")}
         style={{color:tab==="FirstDayTab"?"red":"" }}
        
         >
            First day
            </li>
        <li  onClick={()=>switchTab("SecondDayTab")}
        style={{color:tab==="SecondDayTab"?"red":""}}>Second day</li>
        <li  onClick={()=>switchTab("ThirdDayTab")}
        style={{color:tab==="ThirdDayTab"?"red":""}}>Third day</li>
    </ul>
<hr />
    
     {
     tab==="SecondDayTab"?SecondDayTab.map((item,i)=>{
             return(
         <div className="programs-content py-4"key={i}>
         <div className="program-img">
                 <img src={item.img} alt={item.alt} className='w-75' />
             </div>
             <div className="program-text">
                 <div className='d-flex gap-3'>
                     <div>
                     <i className={item.icon_time}></i>
                     <span>{item.time}</span>
                     </div>
                     <div>
                     <i className={item.icon_location}></i>
                   
                     <span>{item.room_number}</span>
                     </div>
                 </div>
            <h3>{item.title}</h3>
               <h6>{item.name}</h6>
               <p>{item.desc}</p>
             </div>  
                 </div>
                
            )
     }) : tab==="ThirdDayTab"?ThirdDayTab.map((item,i)=>{
             return(
         <div className="programs-content py-4" key={i}>
         <div className="program-img">
                 <img src={item.img} alt={item.alt} className='w-75' />
             </div>
             <div className="program-text">
                 <div className='d-flex gap-3'>
                     <div>
                     <i className={item.icon_time}></i>
                     <span>{item.time}</span>
                     </div>
                     <div>
                     <i className={item.icon_location}></i>
                   
                     <span>{item.room_number}</span>
                     </div>
                 </div>
                 <h3>{item.title}</h3>
                 <h6>{item.name}</h6>
                 <p>{item.desc}</p>
             </div>  
                 </div>
                
             )
         }):FirstDayTab.map((item,i)=>{
                return(
            <div className="programs-content py-4" key={i}>
            <div className="program-img">
                    <img src={item.img} alt={item.alt} className='w-75' />
                </div>
                <div className="program-text">
                    <div className='d-flex gap-3'>
                        <div>
                        <i className={item.icon_time}></i>
                        <span>{item.time}</span>
                        </div>
                        <div>
                        <i className={item.icon_location}></i>
                       
                        <span>{item.room_number}</span>
                        </div>
                    </div>
                    <h3>{item.title}</h3>
                    <h6>{item.name}</h6>
                    <p>{item.desc}</p>
                </div>  
                    </div>
                    
                )
            })
     }

    </div>
    </div>

    </>
  )
}

// {ProgramData.map((item,i)=>{
//     return(
// <div className="programs-content" key={i}>
// <div className="program-img">
//         <img src={item.img} alt={item.alt} className='w-75' />
//     </div>
//     <div className="program-text">
//         <div className='d-flex gap-3'>
//             <div>
//             <i className={item.icon_time}></i>
//             <span>{item.time}</span>
//             </div>
//             <div>
//             <i className={item.icon_location}></i>
           
//             <span>{item.room_number}</span>
//             </div>
//         </div>
//         <h3>{item.title}</h3>
//         <h6>{item.name}</h6>
//         <p>{item.desc}</p>
//     </div>  
//         </div>
        
//     )
// })}