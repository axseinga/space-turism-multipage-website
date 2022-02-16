import express from "express";
import { getCrew } from "../controllers/crewController.js";

const router = express.Router();
router.route("/").get(getCrew);

export { router };
