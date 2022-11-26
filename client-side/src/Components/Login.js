import React from 'react'
import '../App.css'
import { Button, Label, TextInput } from 'flowbite-react'

const Login = () => {
  return (
    <>
      <div className="px-44 py-16">
        <h1 className="py-5 text-3xl font-bold from-stone-800">Sign In</h1>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-4 block">
              <Label htmlFor="name1" />
            </div>
            <TextInput
              id="name1"
              type="text"
              placeholder="Your Name"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Your Email "
              required={true}
            />
          </div>
          
          <Button type="submit">Submit</Button>
          <p className='py-3 text-black text-xl font-bold hover:text-blue-900 underline'>
            <a href="/signup">Create an account</a>
          </p>
        </form>
      </div>
    </>
  )
}

export default Login
