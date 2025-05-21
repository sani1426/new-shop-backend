import MovieModel from '../../models/Movie.js'

const getMoviesByCategoryController = async (req, res) => {
  try {
    const { pageNumber } = req.query || 1
    const pageSize = 8
    const { category } = await req.params

    const allMovies = await MovieModel.find({ category: category })
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)

    return res.status(200).json({
      success: true,
      error: false,
      message: 'Successfully get  your Movies',
      data: allMovies,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Server Error 😡😡😡',
    })
  }
}

export default getMoviesByCategoryController
