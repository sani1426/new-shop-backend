import MovieModel from '../../models/Movie.js'

const getMoviesByYearController = async (req, res) => {
  try {
    const { year } = await req.query
    const { pageNumber } = await req.query
    const pageSize = 8

    const Movies = await MovieModel.find({ year: year }).skip((pageNumber - 1) * pageSize)
      .limit(pageSize)

    if (Movies) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Successfuly get Your Movies ✨✨✨',
        data: Movies,
      })
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'not Found 😡😡😡',
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


export default getMoviesByYearController