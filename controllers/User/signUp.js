import UserModel from '../../models/User.js'

const signUpController = async (req, res) => {
  try {
    const { name, email, password, gender } = req.body

    if (!name || !email || !password || !gender) {
      res.status(400).json({
        success: false,
        error: true,
        message: 'every field must fill 😡😡😡',
      })
    }

    const user = new UserModel({
      name,
      email,
      password,
      gender,
    })
    const newUser = await user.save()

    res.status(201).json({
      data: newUser,
      success: true,
      error: false,
      message: 'new User Successfully Created ✨✨✨',
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: 'Server Error 😡😡😡',
    })
  }
}

export default signUpController
