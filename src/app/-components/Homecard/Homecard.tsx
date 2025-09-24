
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { product } from '@/types/product.type'
import Link from 'next/link'
import React from 'react'
import AddBtnCart from '../AddBtnCart/AddBtnCart'

const Homecard = ({product} :{product:product}) => {
  return (
   <div  className='w-full sm:w-1/2 md:w-1/3  lg:w-1/5 xl:w-1/5  p-3'>


     
      <div className='inner '>

    <Card className='p-2 gap-1 product'>
       <Link href={`/ProductDetailes/${product.id}`}>
  <CardHeader className='p-0'>
  <img src={product.imageCover} alt="product" />
  </CardHeader>
  <CardContent className='p-0' >
    <p className='font-bold text-green-500 mb-3'>{product.category.name}</p>
     <p className='line-clamp-1'>{product.title}</p>
  </CardContent>
  <CardFooter className='p-0'>
   <div className='w-full  flex justify-between items-center'>
     <p>{product.price}EGP</p>
      <i className='fa-solid fa-star text-yellow-500 ml-auto'></i>
      <p>{product.ratingsAverage}</p>
     
     </div>
  </CardFooter>
  <div className='flex mt-3'>
     <i className='fa-solid fa-heart ml-auto'></i>
  </div>
      </Link>
   <AddBtnCart id={product.id}/> 
</Card>

      </div>
     
      
      </div>
  )
}


export default Homecard
