import mongoose from "mongoose"

mongoose.connect().then(()=>{console.log(`Database Connected...`)}).catch((err)=>{console.error(`Database Error Occured!`,err)})

const filesSchema = new mongoose.Schema({
	originalUrl: {type:String, required: true},
	mappedUrl: {type: String, required: true},
	isLocked: {type: Boolean, required: true},
	craetedBy: {type: String, required: true},
	passkey: {type: String, required: false},
})
 
const links = mongoose.model('Link',filesSchema)

export default links
