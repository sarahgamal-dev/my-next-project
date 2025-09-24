"use server"

import { getMytoken } from "@/utilities/token"


   export async function   getUserCartAction(){

    const token =await getMytoken()

     if(!token){
        throw Error("Login First")
     }


  const  response =  await  fetch("https://ecommerce.routemisr.com/api/v1/cart" ,{
    headers:{
        token: token  as string
    }
  })

  const  data = await response.json()


  return data
}