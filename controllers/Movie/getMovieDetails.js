import MovieModel from "../../models/Movie.js"



const getMovieDetailsController = async (req , res) => {

    try {
        const {id} = await req.params

        const detail = await MovieModel.findById(id)

        if(detail){
            return res.status(200).json({
                success: true,
                error: false,
                message: 'Success ✨✨✨',
                data: detail
              })
        }else{
            return res.status(404).json({
                success: false,
                error: true,
                message: 'Not Found 😡😡😡',
              })
        }
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: 'Server Error 😡😡😡',
          })
    }
}

export default getMovieDetailsController