"use client"

import { Button } from '@/components/ui/button'
import { cartContext } from '@/Context/CartContext'
import React, { useContext } from 'react'
import { toast } from 'sonner'




const AddBtnCart = ({ id }: { id: string }) => {

  const  {addProductTOCart} =   useContext(cartContext )

  async function handleAddCart() {
    try {
      const data = await addProductTOCart(id)
  

      if (data.status === "success") {
        toast.success(data.message, {
          duration: 1000,
          position: "top-center"
        })
      } else {
        toast.error("Process is failed", {
          duration: 1000,
          position: "top-center"
        })
      }
    } catch (error) {
      toast.error("Something went wrong", {
        duration: 1000,
        position: "top-center"
      })
    }
  }

  return (
    <div>
      <Button
        onClick={handleAddCart}
        className="w-full bg-green-600 text-white hover:bg-white hover:text-black hover:border hover:border-black"
        variant="default"
      >
        + Add
      </Button>
    </div>
  )
}

export default AddBtnCart
