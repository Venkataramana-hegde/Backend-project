import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


//Configurations using middlewares
app.use(express.json({limit: "16kb"}))          //middleware configuraion to allow json through express
app.use(express.urlencoded({extended: true, limit: "16kb"}))   
app.use(express.static("public"))               //store any pdfs or images in server can be accessed public
app.use(cookieParser())                         //middleware to access and send cookies to user browser

//routes import
import userRouter from "./routes/user.routes.js"


//routes declaration
app.use("/api/v1/users", userRouter)



export { app }