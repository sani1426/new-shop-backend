import express from 'express'
import signUpController from '../controllers/User/signUp.js'
import signInController from '../controllers/User/signIn.js'
import verifyEmailController from '../controllers/User/veifyEmail.js'

const router = express.Router()


router.post('/sign-up' , signUpController)
router.post('/verify-email' , verifyEmailController)
router.post('/sign-in' , signInController)

export default router