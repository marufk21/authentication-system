import React from 'react'
import '../App.css'
import { Button, Label, TextInput } from 'flowbite-react'

const Signup = () => {
  return (
    <>
      <div className="px-48">
        <h1 className="py-4 text-3xl font-bold from-stone-800 ">Sign Up</h1>

        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
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

          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone1" />
            </div>
            <TextInput
              id="phone1"
              type="text"
              placeholder="Your Phone"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="profession1" />
            </div>
            <TextInput
              id="profession1"
              type="text"
              placeholder="Your Profession"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="Your Password"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="Confirm Your Password"
              required={true}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  )
}

export default Signup
