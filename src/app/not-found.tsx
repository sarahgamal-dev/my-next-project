import React from 'react'
import  Image  from 'next/image';
import errorimage from "./../../public/slider/404.jpg"

const errorpage = () => {
  return (
    <div className='w-full md:w-[80%] mx-auto  p-5 md:p-0 '>
      
      <Image src={errorimage} alt='errorimage'></Image>
    </div>
  )
}

export default errorpage
