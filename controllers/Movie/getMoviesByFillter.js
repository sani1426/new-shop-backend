import MovieModel from '../../models/Movie.js'

const getMoviesByFillter = async (req, res) => {
  try {
    const { category, genres, year, sortBy, limit, search , pageNumber } = req.query

    let pageSize = 8 ;
    let query = {}

    if (category) {
      query.category = category
    }
    if (genres) {
      query.genres = { $in: [genres] }
    }
    if (year) {
      query.year = year
    }
    if (search) {
      query.$or = [{ name: { $regex: search, $options: 'i' } }]
    }

    let sort = {}
    if (sortBy) {
      switch (sortBy) {
        case 'newest':
          sort = { createdAt: -1 }
          break
        case 'popular':
          sort = { likes: -1 }
          break
        case 'topRated':
          sort = { rating: -1 }
          break
        default:
          break
      }
    }

    let Movies = await MovieModel.find(query)
      .sort(sort).skip((pageNumber -1) * pageSize)
      .limit(limit || 8)
    
    return res.status(200).json({
      success: true,
      error: false,
      message: 'Successfully filltered ✨✨✨',
      data: Movies,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Server Error 😡😡😡',
    })
  }
}

export default getMoviesByFillter