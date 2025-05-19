
import express from 'express'
import getAllMoviesController from '../controllers/Movie/GetAllMovies.js'
import getMoviesByGenreController from '../controllers/Movie/getMoviesByGenre.js'

const router = express.Router()

router.get('/' , getAllMoviesController)
router.get('/pagination' , getMoviesByGenreController)


export default router