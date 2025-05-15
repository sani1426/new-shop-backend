import express from 'express'
import signUpController from '../controllers/User/signUp.js'
import signInController from '../controllers/User/signIn.js'
import authToken from '../middlewares/authToken.js'


const router = express.Router()


router.post('/sign-up' , signUpController)

router.post('/sign-in' , signInController)

router.get('/user-details' , authToken , userDetailsController)

export default router