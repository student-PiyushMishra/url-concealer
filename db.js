import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
	console.log(`Database connected...`)
})
.catch((err)=>{
	console.error(`MongoDB connection error:`,err)
})

