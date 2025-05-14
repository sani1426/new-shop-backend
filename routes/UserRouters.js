import express from 'express'
import signUpController, { verifyEmailController } from '../controllers/User/signUp.js'
import signInController from '../controllers/User/signIn.js'

const router = express.Router()


router.post('/sign-up' , signUpController)
router.post('/verify-email' , verifyEmailController)
router.post('/sign-in' , signInController)

export default router