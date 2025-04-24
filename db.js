import mongoose from "mongoose"

mongoose.connect("mongodb+srv://pm:piyush@mongodb-practice.es9tj.mongodb.net/").then(()=>{console.log(`Database Connected...`)}).catch((err)=>{console.error(`Database Error Occured!`,err)})

const filesSchema = new mongoose.Schema({
	originalUrl: {type:String, required: true},
	mappedUrl: {type: String, required: true},
	isLocked: {type: Boolean, required: true},
	craetedBy: {type: String, required: true},
	passkey: {type: String, required: false},
})
 
const links = mongoose.model('Link',filesSchema)

export default links
