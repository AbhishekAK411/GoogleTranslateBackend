import express from "express";
import { detectLang, getLang, translateLang } from "../controllers/translate.js";

const router = express.Router();

router.get("/getLang", getLang);
router.post("/detectLang", detectLang);
router.post("/translate", translateLang);

export default router;