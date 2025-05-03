import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGODB_URI).then(()=>{console.log("Successfully connected to the database...")}).catch((err)=>{console.error("Bhai program fat gaya database se connect nahi kar paa raha hai...",err)})

const filesSchema = new mongoose.Schema({
	originalUrl: {type:String, required: true},
	mappedUrl: {type: String, required: true},
	isLocked: {type: Boolean, required: true},
	createdBy: {type: String, required: true},
	passkey: {type: String, required: false},
})
 
const links = mongoose.model('Link',filesSchema)

export default links
