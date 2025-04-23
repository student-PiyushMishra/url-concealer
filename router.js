// imported express, destructure it and then just get only Router from it
import {Router} from "express"

// setup Router in a variable
const router = Router()

// routes
router.get("/",(req,res)=>{
	res.send("Setting up the routes from router.js")
})

// exported router for index.js
export default router
