import { getuserOrder } from '@/apis/getUserOrder'
import Image from 'next/image'
import React from 'react'
import { product } from '@/types/product.type';

const AllOrders = async () => {
  const data = await getuserOrder()

  console.log(data);

  return (
    <div className='md:w-[80%] mx-auto w-full my-10 px-5 md:px-0'>
      <div className='p-5 allorders'>
        {data.map((order, orderIdx: number) => (
          <div className='p-5 bg-slate-200 mb-5' key={orderIdx}>
            <div className='flex'>
              {order.cartItems.map((item, itemIdx: number) => (
                <div className='w-1/6 me-3' key={itemIdx}>
                  <Image
                    src={item.product.imageCover}
                    alt={item.product.title}
                    width={200}
                    height={200}
                    className='w-full'
                  />
                  <h1 className='line-clamp-1'>{item.product.title}</h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllOrders
