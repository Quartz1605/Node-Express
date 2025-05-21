import express, { urlencoded } from "express"; 
import cors from "cors";
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
dotenv.config()

const app = express();

//app.use(cors()) 
// Use method is for middleware and configurations.// Use ctrl + space to see method options.

//Production mein people use 
app.use(cors({
  origin : process.env.CORS_ORIGIN,
  credentials : true,
})) //For Cross origin resource sharing.

app.use(express.json({
  limit : "16kb"
})) // For getting json requests.

app.use(express.urlencoded({extended : true,limit : "16kb"}))
//for url encoding.

app.use(express.static("public"))
//for static files like images and all

app.use(cookieParser())
// for accessing and setting cookies.





//routes
import userRouter from "./routes/user.routes.js"


//routes declaration
app.use("/api/v1/users",userRouter)







export { app }

