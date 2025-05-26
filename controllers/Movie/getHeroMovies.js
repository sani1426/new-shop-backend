import MovieModel from '../../models/Movie.js'

const getHeroMoviesController = async (req, res) => {
  try {
    const movies = await MovieModel.find().sort({ rating: -1 }).limit(6)

    return res.status(200).json({
      success: true,
      error: false,
      message: 'Successfully get movies ✨✨✨',
      data: movies,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Server Error 😡😡😡',
    })
  }
}

export default getHeroMoviesController
