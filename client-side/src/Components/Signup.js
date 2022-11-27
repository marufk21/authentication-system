import React from 'react'
import { useState } from 'react'
import { Button, Label, TextInput } from 'flowbite-react'

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  })

  let name, value
  const handleInput = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })
  }
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
              id="name"
              type="text"
              placeholder="Your Name"
              name="name"
              value={user.name}
              onChange={handleInput}
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="Your Email "
              name="email"
              value={user.email}
              onChange={handleInput}
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" />
            </div>
            <TextInput
              id="phone1"
              type="text"
              placeholder="Your Phone"
              name="phone"
              value={user.phone}
              onChange={handleInput}
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="profession1" />
            </div>
            <TextInput
              id="profession"
              type="text"
              placeholder="Your Profession"
              name="work"
              value={user.work}
              onChange={handleInput}
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" />
            </div>
            <TextInput
              type="password"
              placeholder="Your Password"
              name="password"
              value={user.password}
              onChange={handleInput}
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" />
            </div>
            <TextInput
              type="password"
              placeholder="Confirm Your Password"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInput}
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
