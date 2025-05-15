import UserModel from "../../models/User.js"



const userDetailsController = async (req , res) => {

    try {
        
        const user = await UserModel.findById(req.userId)

       return res.status(200).json({
            data: user,
            success: true,
            error: false,
            message: 'ok✨✨',
          })


    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: 'Server Error 😡😡😡',
          })
    }
}


export default userDetailsController