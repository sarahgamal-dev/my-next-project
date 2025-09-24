 "use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { registerschema, registerschemaType } from '@/schema/register.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
 import React from 'react'
import {  useForm } from 'react-hook-form'
import async from './../../apis/Allproducts';
import { success } from './../../../node_modules/zod/v4/classic/schemas';
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'


const register = () => {


  const router = useRouter()

  const form =  useForm<registerschemaType> ({

    defaultValues:
    {
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:""
},


resolver:zodResolver(registerschema)



  })


async function handleRegister(values: registerschemaType) {
  console.log(" values before sending:", values);
  try {
    const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values);
    console.log("✅ success:", data);

    toast.success(data.message,{
      position:'top-center',
      duration:3000
    })

    router.push("/login")

  } catch (error: any) {
    console.log("❌ error:", error.response?.data);


        toast.success(error.response.data.message,{
      position:'top-center',
      duration:3000
    })
  }
}



  return (
    <div className='mx-auto px-5 md:px-0 w-full md:w-1/2 my-12'>

      <h1 className='text-3xl font-bold text-center mb-5 '>Register now</h1>


<Form {...form}>

<form onSubmit={form.handleSubmit(handleRegister)}>

  <FormField
    control={form.control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Name </FormLabel>
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



   <FormField
    control={form.control}
    name="rePassword"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Re-password </FormLabel>
        <FormControl>
        <Input type='password' {...field } />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />



   <FormField
    control={form.control}
    name="phone"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Phone </FormLabel>
        <FormControl>
        <Input type='tel' {...field } />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
<Button className='w-full mt-5 bg-green-600 text-white'>Register Now</Button>

</form>

</Form>
     
    </div>
  )
}

export default register
