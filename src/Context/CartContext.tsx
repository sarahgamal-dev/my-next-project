import { getUserCartAction } from '@/cartActions/getUserCart'
import React, { useEffect, useState, createContext } from 'react'
import { AddtoCart } from '@/cartActions/AddtoCart'
import { removeCartItem } from '@/cartActions/removeCartItem'
import { updateCartAction } from '@/cartActions/updatecart'
import { clearCartAction } from '@/cartActions/clearCart'

interface CartContextType {
  isLoading: boolean
  numOfCart: number
  products: any[]
  totalCartPrice: number
  cartId: string
  addProductTOCart: (id: string) => Promise<any>
  removeItem: (id: string) => Promise<any>
  updateCart: (id: string, count: number) => Promise<any>
  clearCart: () => Promise<any>
  afterPayment: () => void
}

export const cartContext = createContext<CartContextType>({} as CartContextType)

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [numOfCart, setNumOfCart] = useState(0)
  const [totalCartPrice, setTotalCartPrice] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<any[]>([])
  const [cartId, setCartId] = useState("")

  async function addProductTOCart(id: string) {
    try {
      const data = await AddtoCart(id)

      
      setNumOfCart(data.numOfCart)
      setProducts(data.data.products)
      setTotalCartPrice(data.data.totalCartPrice)

      return data
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async function removeItem(id: string) {
    try {
      const data = await removeCartItem(id)
      setNumOfCart(data.numOfCart)
      setProducts(data.data.products)
      setTotalCartPrice(data.data.totalCartPrice)
      return data
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async function updateCart(id: string, count: number) {
    try {
      const data = await updateCartAction(id, count)
      setNumOfCart(data.numOfCart)
      setProducts(data.data.products)
      setTotalCartPrice(data.data.totalCartPrice)
      return data
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async function clearCart() {
    try {
      const data = await clearCartAction()
      setNumOfCart(0)
      setProducts([])
      setTotalCartPrice(0)
      return data
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async function getUserCart() {
    setIsLoading(true)
    try {
      const data = await getUserCartAction()
      setNumOfCart(data.numOfCart)
      setProducts(data.data.products)
      setTotalCartPrice(data.data.totalCartPrice)
      setCartId(data.cartId)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUserCart()
  }, [])

  function afterPayment() {
    setCartId("")
    setNumOfCart(0)
    setTotalCartPrice(0)
    setProducts([])
  }

  return (
    <cartContext.Provider
      value={{
        isLoading,
        numOfCart,
        products,
        totalCartPrice,
        addProductTOCart,
        removeItem,
        updateCart,
        clearCart,
        cartId,
        afterPayment,
      }}
    >
      {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider
