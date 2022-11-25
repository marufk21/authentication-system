const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
require('./db/connect')
const User = require('./models/userSchema')
const router = express.Router()

// calling the express.json() method for parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//link the routes files for our make route easy
app.use(require('./routes/auth'))

//middleWare
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
// myLogger()

app.get('/', (req, res) => {
  res.send('Hello World! from the server app.js')
})
app.get('/about', myLogger, (req, res) => {
  res.send('Hello World About')
})

app.get('/contact', (req, res) => {
  res.cookie('test', 'maruf')
  res.send('Hello World! Signin')
})

app.get('/signin', (req, res) => {
  res.send('Hello World! Signin')
})
app.get('/signup', (req, res) => {
  res.send('Hello World! Signup')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
