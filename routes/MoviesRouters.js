
import express from 'express'
import getAllMoviesController from '../controllers/Movie/GetAllMovies'

const router = express.Router()

router.get('/' , getAllMoviesController)


export default router