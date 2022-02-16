import express from "express";
import { getAllCrew, getCrewMember } from "../controllers/crewController.js";

const router = express.Router();
router.route("/").get(getAllCrew);
router.route("/:id").get(getCrewMember);

export { router };
