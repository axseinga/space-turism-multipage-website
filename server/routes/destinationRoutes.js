import express from "express";
import {
    getAllDestinations,
    getDestination,
} from "../controllers/destinationController.js";

const router = express.Router();

router.route("/").get(getAllDestinations);
router.route("/:id").get(getDestination);

export { router };
