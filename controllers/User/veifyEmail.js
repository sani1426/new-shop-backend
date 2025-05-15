import UserModel from "../../models/User.js"



const verifyEmailController = async (req, res) => {
    try {
      const { id } = req.body
      const user = await UserModel.findOne(id)
  
      if (!user) {
        return res.status(400).json({
          message: 'invalid code',
          error: true,
          success: false,
        })
      }
      console.log(user);
 
  
      const updateUser = await UserModel.updateOne(
        { _id: id },
        {
          verify_email: true,
        }
      )
  
      return res.status(200).json({
        data : updateUser ,
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


  export default verifyEmailController