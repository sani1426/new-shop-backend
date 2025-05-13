import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ConnectToDb from './config/db.js'
import cookieParser from 'cookie-parser'
import userRouter from './routes/UserRouters.js'
import helmet from 'helmet'

dotenv.config()


const app = express()

app.use(cors({
  origin : process.env.FRONTEND_URL ,
  credentials : true ,
  allowedHeaders : ['Content-Type', 'Authorization'],
  preflightContinue: true,
}))

app.use(express.json())
app.use(cookieParser())
app.use(helmet({
  crossOriginResourcePolicy : false
}))



app.use("/api/users" , userRouter)







const PORT = process.env.PORT || 8080


app.listen(PORT , async () => {
    await ConnectToDb()
    console.log(` server is running on port ${PORT}`);
})