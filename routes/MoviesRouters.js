import express from 'express'
import getMoviesByGenreController from '../controllers/Movie/getMoviesByGenre.js'
import getHeroMoviesController from '../controllers/Movie/getHeroMovies.js'
import getMoviesByCategoryController from '../controllers/Movie/GetAllMovies.js'
import getMovieDetailsController from '../controllers/Movie/getMovieDetails.js'
import getSimilarMoviesController from '../controllers/Movie/getSimilarMovies.js'
import getMoviesByYearController from '../controllers/Movie/getMoviesByYear.js'
import getMoviesByFillter from '../controllers/Movie/getMoviesByFillter.js'

const router = express.Router()

router.get('/category/:category', getMoviesByCategoryController)
router.get('/genres', getMoviesByGenreController)
router.get('/hero-movies', getHeroMoviesController)
router.get('/details/:id', getMovieDetailsController)
router.post('/similar-movies', getSimilarMoviesController)
router.get('/date', getMoviesByYearController)
router.get('/fillter', getMoviesByFillter)

export default router
