import express from "express"
import { getData } from "../Controllers/Data.controller.js";

let router=express.Router()

router.get("/",getData);


export default router;

