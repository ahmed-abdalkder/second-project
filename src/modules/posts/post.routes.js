import { Router } from "express";
import { addpost, deletepost, getposts, updatepost } from "./post.controler.js";

const router=Router()

router.post("/",addpost)
router.get("/",getposts)
router.patch("/",updatepost)
router.delete("/",deletepost)



export default router