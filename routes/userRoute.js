import express from "express";
import {Addsgpa,Getsgpa} from "../controllers/userController.js";
const router=express.Router();
router.post("/Addsgpa",Addsgpa);
router.get("/Getsgpa",Getsgpa);

export default router;