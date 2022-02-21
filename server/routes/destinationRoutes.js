import express from "express";
import {
    createDestination,
    getAllDestinations,
    getDestination,
    updateDestination,
    deleteDestination,
} from "../controllers/destinationController.js";

const router = express.Router();

router.route("/").post(createDestination).get(getAllDestinations);
router
    .route("/:id")
    .get(getDestination)
    .patch(updateDestination)
    .delete(deleteDestination);

export { router };
