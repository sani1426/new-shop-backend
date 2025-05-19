import MovieModel from "../../models/Movie.js";



const getMoviesByGenreController = async (req , res) => {

    try {
        pageSize = 10 ;
        pageNumber = req.searchparams.pageNumber ;
        console.log(pageNumber);

 
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: 'Server Error 😡😡😡',
          })
    }
}

export default getMoviesByGenreController