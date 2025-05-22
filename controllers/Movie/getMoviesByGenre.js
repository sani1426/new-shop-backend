import MovieModel from '../../models/Movie.js'

const getMoviesByGenreController = async (req, res) => {
  try {
    const { genre } = await req.query
    const { pageNumber } = req.query || 1
    const pageSize = 8

    const movies = await MovieModel.find({ genres: { $in: [genre] } })
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)

    if (movies) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Successfully get movies on your genre',
        data: movies,
      })
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'movies not find',
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

export default getMoviesByGenreController
