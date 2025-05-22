import express from 'express'
import getMoviesByGenreController from '../controllers/Movie/getMoviesByGenre.js'
import getHeroMoviesController from '../controllers/Movie/getHeroMovies.js'
import getMoviesByCategoryController from '../controllers/Movie/GetAllMovies.js'
import getMovieDetailsController from '../controllers/Movie/getMovieDetails.js'

const router = express.Router()

router.get('/category/:category', getMoviesByCategoryController)
router.get('/genres', getMoviesByGenreController)
router.get('/hero-movies', getHeroMoviesController)
router.get('/details/:id', getMovieDetailsController)

export default router
