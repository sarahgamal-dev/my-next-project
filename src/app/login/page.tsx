 "use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
 import React from 'react'
import {  useForm } from 'react-hook-form'
import async from './../../apis/Allproducts';
import { success } from './../../../node_modules/zod/v4/classic/schemas';
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { loginschema, LoginschemaType } from '@/schema/login.schema'
import {signIn} from "next-auth/react"


const Login = () => {


  const router = useRouter()

  const form =  useForm<LoginschemaType> ({

    defaultValues:
    {
   
    email:"",
    password:""
  
},


resolver:zodResolver(loginschema)



  })


async function handleLogin(values: LoginschemaType) {
  console.log(" values before sending:", values);
  // try {
  //   const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values);
  //   console.log("✅ success:", data);

  //   toast.success(data.message,{
  //     position:'top-center',
  //     duration:3000
  //   })

  //   router.push("/")

  // } catch (error: any) {
  //   console.log("❌ error:", error.response?.data);


  //       toast.success(error.response.data.message,{
  //     position:'top-center',
  //     duration:3000
  //   })
  // }


  const res = await signIn("credentials" , {
    email:values.email,
    password:values.password,
    redirect:false,
    callbackUrl:"/"
  })


  if(res?.ok){
      toast.success("login success",{
      position:'top-center',
    duration:1000
   })

  window.location.href= res.url || "/"
  
  }
   

  else{
          toast.error(res?.error,{
      position:'top-center',
    duration:1000
   })
  }
}



  return (
    <div className='mx-auto px-5 md:px-0 w-full md:w-1/2 my-12'>

      <h1 className='text-3xl font-bold text-center mb-5 '>Login now</h1>


<Form {...form}>

<form onSubmit={form.handleSubmit(handleLogin)}>


 <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email </FormLabel>
        <FormControl>
        <Input type='text' {...field } />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />




   <FormField
    control={form.control}
    name="password"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Password </FormLabel>
        <FormControl>
        <Input type='password' {...field } />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />



 




<Button className='w-full mt-5 bg-green-600 text-white'>Login Now</Button>

</form>

</Form>
     
    </div>
  )
}

export default Login
