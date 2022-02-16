import express from "express";
import {
    getAllTechnologies,
    getTechnology,
} from "../controllers/technologyController.js";

const router = express.Router();
router.route("/").get(getAllTechnologies);
router.route("/:id").get(getTechnology);

export { router };
