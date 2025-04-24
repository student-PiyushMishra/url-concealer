// imported express, destructure it and then just get only Router from it
import {Router} from "express"
import mongoose from "mongoose"
import linkModel from "./db.js"
import handler from "./handlers.js"

// setup Router in a variable
const router = Router()

console.log(handler)

// routes
router.get("/",(req,res)=>{
	res.render("index")
})

router.post("/createLink",(req,res)=>{
	const originalURL = req.body.originalLink;
	const createdBy = req.body.createdBy;
	const isLocked = false;
	if(req.body.isLocked){
		isLocked = true;
	}
	const dataToStore = {
		originalUrl: originalURL,
		mappedUrl: `https://pmurl/${handler.mapUrl()}`,
		isLocked: isLocked,
		createdBy: createdBy,
	}
	if(isLocked === true){
		dataToStore.passkey = "PIYUSH"
	}
	res.send(dataToStore)
})

// exported router for index.js
export default router
