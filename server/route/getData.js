import express from 'express'
import {getData, createData, updateData, deleteData} from '../controllers/getData.js'
 
const router = express.Router()

router.get("/", getData)
router.post("/",createData)
router.patch("/:id",updateData)
router.delete("/:id",deleteData)
export default router;