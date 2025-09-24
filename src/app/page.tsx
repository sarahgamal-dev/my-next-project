
import getAllproducts from '@/apis/Allproducts';
import React from 'react'
import Homecard from './-components/Homecard/Homecard';
import MainSlider from './-components/MainSlider/MainSlider';
import SecoundSlider from './-components/SecoundSlider/SecoundSlider';
import { product } from '@/types/product.type';

const  home = async () => {

 const data:product[] = await getAllproducts()


  return (
    <section className='px-5 md:px-0 my-10 w-full md:w-[80%] mx-auto'>
      <MainSlider/>
      <SecoundSlider/>
    
    <div className='flex flex-wrap mt-3'>

    {data.map((product:product ,idx)=> <Homecard key={idx} product={product}/> )}
    </div>
    </section>
  )
} 

export default home

