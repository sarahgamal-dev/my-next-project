 "use client"
 import React from 'react'
import banner1 from "./../../../../public/slider/banner1.jpg"
import banner2 from "./../../../../public/slider/banner2.jpg"
import slide1 from "./../../../../public/slider/image1.jpg"
import slide2 from "./../../../../public/slider/image2.jpg"
import slide3 from "./../../../../public/slider/image3.jpg"
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



const MainSlider = () => {
  return (
    <div className='mb-10 flex'>

        <div className='w-1/2'>
           <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     
    >
      <SwiperSlide>
        <Image src={slide1} alt='banner' className=' w-full h-[400px] object-contain'></Image>
      </SwiperSlide>
     
      <SwiperSlide>
        <Image src={slide2} alt='banner' className=' w-full h-[400px] object-contain'></Image>
      </SwiperSlide>

       <SwiperSlide>
        <Image src={slide3} alt='banner' className=' w-full h-[400px] object-contain'></Image>
      </SwiperSlide>
      
           </Swiper>
        </div>
        <div className='w-1/3'>
        <Image src={banner1} alt='banner' className='h-[200px] object-cover'></Image>
         <Image src={banner2} alt='banner' className='h-[200px] object-cover'></Image>
        </div>
      




    </div>

    

  )
}

export default MainSlider
