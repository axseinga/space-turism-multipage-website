import express from "express";
import {
    createCrewMember,
    getAllCrew,
    getCrewMember,
    updateCrewMember,
    deleteCrewMember,
} from "../controllers/crewController.js";

const router = express.Router();
router.route("/").post(createCrewMember).get(getAllCrew);
router
    .route("/:id")
    .get(getCrewMember)
    .put(updateCrewMember)
    .delete(deleteCrewMember);

export { router };
