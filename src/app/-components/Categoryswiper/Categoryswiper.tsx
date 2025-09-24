 "use client"
 import React from 'react'
import categories from './../../categories/page';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { category } from '@/types/category.type';

// Import Swiper styles


const Categoryswiper = ({categories} : {categories : category[]}) => {
  return (
    <div>
        <Swiper
  spaceBetween={10}
  slidesPerView={5}
  
>
  {categories.map((category, idx) => (
    <SwiperSlide key={idx} style={{ width: "200px" }}>
      <img
        src={category.image}
        alt={category.name}
        className="h-[200px] w-full object-cover mx-auto"
      />
      <p className="my-3 text-center">{category.name}</p>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  )
}

export default Categoryswiper
