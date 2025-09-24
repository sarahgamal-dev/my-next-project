 
import categoryslide from '@/apis/categories/categories'
 import React from 'react'
import Categoryswiper from '../Categoryswiper/Categoryswiper'
import categories from './../../categories/page';
import { category } from '@/types/category.type';


const SecoundSlider = async() => {
   const data :category[] = await categoryslide()

   console.log(data);
   

  return (
    <div className='mt-10 mb-3 '>

  <Categoryswiper categories={data}/>
  
      
    </div>
  )
}

export default SecoundSlider
