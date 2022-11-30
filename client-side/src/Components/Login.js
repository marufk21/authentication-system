import React, { useState } from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const history = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (e) => {
    e.preventDefault()

    const res = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const data = await res.json()

    if (res.status === 400 || !data) {
      window.alert('Invalid Credentials')
      console.log('Invalid Credentials')
    } else {
      window.alert('Login Successful')
      console.log('Login Successful')

      history('/')
    }
  }

  return (
    <>
      <div className="px-44 py-16">
        <h1 className="py-5 text-3xl font-bold from-stone-800">Sign In</h1>
        <form method="POST" meclassName="flex flex-col gap-4">
          <div>
            <div className="mb-1 block">
              <Label htmlFor="email1" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email "
              required={true}
            />
          </div>
          <div>
            <div className=" my-4 block">
              <Label htmlFor="password1" />
            </div>
            <TextInput
              id="password1"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              required={true}
            />
          </div>

          <Button className="my-4" type="submit" onClick={loginUser}>
            Submit
          </Button>

          <p className="py-3 text-black text-xl font-bold hover:text-blue-900 underline">
            <a href="/signup">Create an account</a>
          </p>
        </form>
      </div>
    </>
  )
}

export default Login
