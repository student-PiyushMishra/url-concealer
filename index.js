// import statements and env config
import express from "express"
import dotenv from "dotenv"
import ejs from "ejs"
import path from "path"
import {fileURLToPath} from "url"
import routes from "./router.js"
dotenv.config()

// global variables required to setup app
const app = express()
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// setting ejs as the view engine
app.set("view engine","ejs");

// middleware for static files
app.use(express.static(path.join(__dirname,"static")))

// middleware for routes
app.use(routes)

// starting the express server and listening requests
app.listen(PORT, (err)=>{
	if(err) console.error(err)
	else console.log(`Server is running on PORT: ${PORT}`)
})

