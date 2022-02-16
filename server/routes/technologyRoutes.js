import express from "express";
import { getTechnologies } from "../controllers/technologyController.js";

const router = express.Router();
router.route("/").get(getTechnologies);

export { router };
