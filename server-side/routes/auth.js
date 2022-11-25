const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userSchema')
require('../db/connect')

router.get('/', (req, res) => {
  res.send('Hello World from the server router.js')
})

//registration-route
router.post('/register', async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: 'Please enter the field properly' })
  }

  try {
    const userExist = await User.findOne({ email: email })
    if (userExist) {
      return res.status(422).json({ error: 'Email already exist' })
    } else if (password !== cpassword) {
      return res.status(422).json({ error: 'password are not matching' })
    } else {
      const user = new User({ name, email, phone, work, password, cpassword })

      await user.save()

      res.status(201).json({ message: 'user resgistered successfully' })
    }
  } catch (error) {
    console.log(error)
  }
})

//login-route
router.post('/signin', async (req, res) => {
  try {
    let token
    const { email, password } = req.body

    if (!email || !password) {
      return res.json({ message: 'invalid details' })
    }
    const userLogin = await User.findOne({ email: email })
    console.log(userLogin)

    //comparing hashpassword and loginpassword
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password)

      //jwt
      token = await userLogin.generateAuthToken()
      console.log(token)

      // session expired in jwt
      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      })

      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid Credentials' })
      } else {
        res.json({ message: 'user signin succesfully' })
      }
    } else {
      return res.status(400).json({ error: 'Invalid Credentials' })
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
