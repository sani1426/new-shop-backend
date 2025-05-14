import sendEmail from '../../config/sendEmail.js'
import UserModel from '../../models/User.js'
import verifyEmailTemplate from '../../utils/verifyEmailTemplate.js'

const signUpController = async (req, res) => {
  try {
    const { name, email, password, gender } = req.body

    if (!name || !email || !password || !gender) {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'must Provide All Field 😡😡😡',
      })
    }

    const already = await UserModel.findOne({ email })
    if (already) {
      return res.status(401).json({
        success: false,
        error: true,
        message: 'user already exist 🥱🥱🥱',
      })
    }

    const user = new UserModel({
      name,
      email,
      password,
      gender,
    })
    const newUser = await user.save()

    const verifyEmailUrl = ` ${process.env.FRONTEND_URL}/verify-email?code=${newUser?._id} `

    const verifyEmail = await sendEmail({
      sendTo: email,
      subject: 'verify email from newShop',
      html: verifyEmailTemplate({
        name,
        url: verifyEmailUrl,
      }),
    })

    return res.status(201).json({
      data: newUser,
      success: true,
      error: false,
      message: 'new User Successfully Created ✨✨✨',
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Server Error 😡😡😡',
    })
  }
}

export default signUpController

export const verifyEmailController = async (req, res) => {
  try {
    const { code } = req.body
    const user = await UserModel.findOne({ _id: code })

    if (!user) {
      return res.status(400).json({
        message: 'invalid code',
        error: true,
        success: false,
      })
    }

    const updateUser = await UserModel.updateOne(
      { _id: code },
      {
        verify_email: true,
      }
    )

    return res.status(200).json({
      message: 'verify Email Done',
      error: false,
      success: true,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Server Error 😡😡😡',
    })
  }
}
