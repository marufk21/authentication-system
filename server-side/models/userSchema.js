const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
})

//hashing the password
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 10)
    this.cpassword = bcrypt.hashSync(this.cpassword, 10)
  }
  next()
})

//we are generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, 'MYNAMEISMARUFKHANMYNAMEISMARUFK')
    this.tokens = this.tokens.concat({ token: token })
    await this.save()
    return token
    console.log(token)
  } catch (error) {
    console.log(error)
  }
}

//create collections
const User = new mongoose.model('User', userSchema)

module.exports = User
