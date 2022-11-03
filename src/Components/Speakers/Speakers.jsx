import React from 'react'
import speakersData from './Data'
import "./Speakers.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function Speakers() {
  return (
    <>
<div className="speakers my-5 py-5 text-center">
    <h2>Creative <span>Speakers</span> </h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aut maiores atque!</p>
  <div className="container">
  <Swiper
      spaceBetween={30}
      slidesPerView={4}
    >

    
      {speakersData.map((item)=>{
       return (   <SwiperSlide>
   
    <div className="speaker-item pt-4" key={item.Id}>
         <img src={item.img} className='w-100 py-2' alt={item.alt} />
        <h4 className='py-2 m-0'>{item.title}</h4>
         <span className='py-2 m-0'>{item.desc}</span>
              </div>
        
  </SwiperSlide> 
       ) 
}

)}

     
    
     
    </Swiper>
  </div>
 
    </div>

</>
)
}
