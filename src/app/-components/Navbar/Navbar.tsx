"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import logo from "./../../../../public/slider/freshcart-logo.svg"
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { cartContext } from '@/Context/CartContext';

const Navbar = () => {

  const { data: session , status } = useSession()
  const { numOfCart } = useContext(cartContext)

  // لو الـ numOfCart مش موجود نخليه 0 عشان الرقم يبان
  const cartCount = numOfCart ?? 0  

  return (
    <div className='bg-slate-100 py-5'>
      <div className='w-full md:w-[80%] mx-auto flex flex-col md:flex-row text-center gap-2 justify-between items-center'>
        
        {/* logo */}
        <Link href="/">
          <Image src={logo} alt='logo' />
        </Link>

        {/* links */}
        <ul className='flex flex-col md:flex-row text-center gap-6 items-center '>
          {status === "authenticated" && <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/wishlist">Wish list</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/brands">Brands</Link></li>
          </>}
        </ul>

        {/* icons & buttons */}
        <div className='flex flex-col md:flex-row text-center gap-2 items-center'>
          
          {/* cart icon with badge */}
          <div className="relative">
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
            <span
              className="
                absolute -top-2 -right-2
                bg-green-600 text-white
                text-xs font-bold
                rounded-full
                w-5 h-5 flex items-center justify-center
              "
            >
              {cartCount}
            </span>
          </div>

          {/* auth buttons */}
          {status === "authenticated" && (
            <button
              className='cursor-pointer'
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Log out
            </button>
          )}
          {status === "unauthenticated" && <>
            <Link href="/register">Register</Link>
            <Link href="/login">Log in</Link>
          </>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
