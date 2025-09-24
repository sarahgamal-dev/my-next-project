

import { getMytoken } from "@/utilities/token"
import axios from "axios"


  export async function  cashPaymentAction(id:string , values:object){


     const token = await  getMytoken()

     if(!token){
        throw Error("Login First")
     }
     
     const  {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${id}`,values , {

        headers:{
            token : token as string
        }


     })

return data

  }