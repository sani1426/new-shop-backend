
import express from 'express'
import getAllMoviesController from '../controllers/Movie/GetAllMovies.js'
import getMoviesByGenreController from '../controllers/Movie/getMoviesByGenre.js'
import getHeroMoviesController from '../controllers/Movie/getHeroMovies.js'

const router = express.Router()

router.get('/' , getAllMoviesController)
router.get('/genres' , getMoviesByGenreController)
router.get('/hero-movies' , getHeroMoviesController)


export default router