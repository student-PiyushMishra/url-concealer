// imported express, destructure it and then just get only Router from it
import {Router} from "express"
import mongoose from "mongoose"
import linkModel from "./db.js"
import handler from "./handlers.js"
import fs from "node:fs"

// setup Router in a variable
const router = Router()

console.log(handler)

// routes
router.get("/",(req,res)=>{
	res.render("index")
})

router.post("/createLink", async (req,res)=>{
	const originalURL = req.body.originalLink;
	const createdBy = req.body.createdBy;
	let isLocked = false;
	if(req.body.isLocked){
		isLocked = true;
	}
	let dataToStore = {
		originalUrl: originalURL,
		mappedUrl: `https://pmurl/${handler.mapUrl()}`,
		isLocked: isLocked,
		createdBy: createdBy,
	}
	const storedData = await new linkModel(dataToStore).save()
	res.send(storedData)

})

// exported router for index.js
export default router
