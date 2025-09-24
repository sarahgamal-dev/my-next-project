import { getMytoken } from "@/utilities/token"; 
import axios from "axios";
 export async function AddtoCart(id: string)
  { const token = await getMytoken(); 
    if(!token){ throw Error("Login First") } 
    const values = { productId: id };
     const { data } = await axios.post( "https://ecommerce.routemisr.com/api/v1/cart",
       values,
        {
           headers: { token: token as string }, } );
        return data; }