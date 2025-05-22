import MovieModel from '../../models/Movie.js'

const getSimilarMoviesController = async (req, res) => {
  try {
    const { movieId } = await req.body
    if (!movieId) {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'must add id 😡😡😡',
      })
    }

    const movie = await MovieModel.findById(movieId)

    if (movie) {
      const similarMovies = await MovieModel.find({
        genres: { $in: [movie?.genres[0] , movie?.genres[1]] },
      })
        .sort({ rating: -1 })
        .limit(5)

      return res.status(200).json({
        success: true,
        error: false,
        message: 'Success ✨✨✨',
        data: similarMovies,
      })
    } else {
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

export default getSimilarMoviesController
