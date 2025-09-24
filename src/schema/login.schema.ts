import * as z from 'zod';




 export const loginschema = z.object(    {
    
    email:z.email ("invalid email"),
    password:z.string ().min(7,"min length 7").max(10 ,"max length 10")
 
})

 export type LoginschemaType =z.infer<typeof loginschema>