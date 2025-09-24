import * as z from 'zod';




 export const registerschema = z.object(    {
    name: z.string().min(3 ,"min length 3") .max(20 , "max length 20")  ,
    email:z.email ("invalid email"),
    password:z.string ().min(7,"min length 7").max(10 ,"max length 10"),
    rePassword:z.string ().min(7,"min length 7").max(10 ,"max length 10"),
    phone:z.string().regex(/^01[0125][0-9]{8}$/, "invalid Phone Number")
}).refine(function(object){
if(object.password === object.rePassword){
    return true
}
 
else{
    return false
}
    
}, {path:["rePassword"],

error:"passwords are not match"


})

 export type registerschemaType =z.infer<typeof registerschema>