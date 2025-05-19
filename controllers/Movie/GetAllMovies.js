import MovieModel from "../../models/Movie.js"



const getAllMoviesController = async (req , res) => {

    try {
        const allMovies = await MovieModel.find().sort({
            createdAt : -1
        })

      return  res.status(200).json({
            success: true,
            error: false,
            message: 'Successfully get  all Movies',
            data : allMovies
          })
        
    } catch (error) {
       return res.status(500).json({
            success: false,
            error: true,
            message: 'Server Error 😡😡😡',
          })
    }
}


export default getAllMoviesController