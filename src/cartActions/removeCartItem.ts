"use server"

import { getMytoken } from "@/utilities/token"
import axios from "axios"


  export async function  removeCartItem(id:string){


     const token = await  getMytoken()

     if(!token){
        throw Error("Login First")
     }
     
     const  {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {

        headers:{
            token : token as string
        }


     })

return data

  }