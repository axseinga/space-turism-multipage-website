import express from "express";
import {
    createTechnology,
    getAllTechnologies,
    getTechnology,
    updateTechnology,
    deleteTechnology,
} from "../controllers/technologyController.js";

const router = express.Router();
router.route("/").post(createTechnology).get(getAllTechnologies);
router
    .route("/:id")
    .get(getTechnology)
    .patch(updateTechnology)
    .delete(deleteTechnology);

export { router };
