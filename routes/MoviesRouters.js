
import express from 'express'
import getMoviesByGenreController from '../controllers/Movie/getMoviesByGenre.js'
import getHeroMoviesController from '../controllers/Movie/getHeroMovies.js'
import getMoviesByCategoryController from '../controllers/Movie/GetAllMovies.js'

const router = express.Router()

router.get('/category/:category' , getMoviesByCategoryController)
router.get('/genres' , getMoviesByGenreController)
router.get('/hero-movies' , getHeroMoviesController)


export default router