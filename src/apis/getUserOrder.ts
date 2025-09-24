"use server"

import { getMytoken } from "@/utilities/token"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

 export async function getuserOrder() {

    const token = await getMytoken()
    
     const  {id} = jwtDecode(token)

     if(!token){
        throw new Error("Login First")

        
     }
    

     const data = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)

     return data
 }