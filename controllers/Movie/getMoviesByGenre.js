import MovieModel from "../../models/Movie.js";



const getMoviesByGenreController = async (req , res) => {

    try {
        const {genre} = await req.params
        console.log(genre);

        const movies = await MovieModel.find({})
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: 'Server Error 😡😡😡',
          })
    }
}