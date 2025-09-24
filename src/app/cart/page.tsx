"use client"
import { cartContext } from '@/Context/CartContext'
import React, { useContext } from 'react'
import Loading from './../loading';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link'
import { toast } from 'sonner';

const Cart = () => {
  const { isLoading, products, totalCartPrice , removeItem , updateCart , clearCart } = useContext(cartContext)

  async function removecart(id: string) {
    try {
      const data = await removeItem(id)

      if (data.status === "success") {
        toast.success(data.message, { duration: 1000, position: "top-center" })
      } else {
        toast.error("Process failed", { duration: 1000, position: "top-center" })
      }
    } catch (error) {
      toast.error("Something went wrong", { duration: 1000, position: "top-center" })
    }
  }

  async function handleUpdate(id: string, newCount: number) {
    if (newCount < 1) {
      toast.error("Quantity cannot be less than 1", { duration: 1000, position: "top-center" })
      return
    }

    try {
      const data = await updateCart(id, newCount)
      if (data.status === "success") {
        toast.success("Cart updated successfully", { duration: 1000, position: "top-center" })
      } else {
        toast.error("Update failed", { duration: 1000, position: "top-center" })
      }
    } catch (error) {
      toast.error("Something went wrong", { duration: 1000, position: "top-center" })
    }
  }

  if (isLoading) {
    return <Loading />
  }

  if (!products || products.length === 0) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-red-600 text-3xl font-bold'>No Data</h1>
      </div>
    )
  }

  return (
    <div className='w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 bg-slate-200'>
      <div className='p-5'>
        <h1 className='text-2xl font-bold'>Cart Shop</h1>
        <p className='my-3 text-green-700 font-mono'>
          Total Price : {totalCartPrice} EGP
        </p>

        <Button className='mb-10' onClick={clearCart}>Clear Cart</Button>

        <Button className='mb-10 ms-5'>
          <Link href={"/payment"}>Payment</Link>
        </Button>

        <div className='Allproducts'>
          {products.map((product: any, idx: number) => (
            <div
              key={idx}
              className='flex items-center justify-between py-3 border-b-[1px] border-green-700/35'
            >
              <div className='flex items-center gap-5'>
                <div>
                  <Image
                    src={product.product.imageCover}
                    alt={product.product.title}
                    height={200}
                    width={200}
                  />
                </div>

                <div>
                  <h1>{product.product.title}</h1>
                  <p className='my-3 text-green-700'>Price : {product.price}</p>
                  <Button onClick={() => removecart(product.product._id)}>Remove</Button>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <Button onClick={() => handleUpdate(product.product._id, product.count + 1)}>+</Button>
                <p>{product.count}</p>
                <Button onClick={() => handleUpdate(product.product._id, product.count - 1)}>-</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart
