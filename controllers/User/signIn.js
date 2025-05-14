import UserModel from '../../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const signInController = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await UserModel.findOne({ email })
    if (!user) {
      return res.status(404).json({
        message: 'user Not Found 😒😒',
        error: true,
        success: false,
      })
    }
    if (!user?.verify_email) {
      return res.status(400).json({
        message: 'please verify your account first 🥱🥱',
        error: true,
        success: false,
      })
    }


    const checkPassword = bcrypt.compareSync(password, user.password)

    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
        gender: user.gender,
        role: user.role,
      }
      const tokenOption = {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      }
      const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 8,
      })

      res.status(200).cookie('token', token, tokenOption).json({
        data: token,
        success: true,
        error: false,
        message: 'Login successfully✨✨',
      })
    } else {
      res.status(400).json({
        message: 'password is wrong 😡😡',
        error: true,
        success: false,
      })
      throw new Error('user Not Found 😒😒')
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: 'Server Error 😡😡😡',
    })
  }
}

export default signInController
