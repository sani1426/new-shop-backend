import UserModel from '../../models/User.js'

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
