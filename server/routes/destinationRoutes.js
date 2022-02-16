import express from "express";
import { getDestinations } from "../controllers/destinationController.js";

const router = express.Router();

router.route("/").get(getDestinations);

export { router };
