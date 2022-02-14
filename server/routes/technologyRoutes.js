import express from "express";
import { readFile } from "fs/promises";

const technologies = JSON.parse(
    await readFile(new URL("../data/technology.json", import.meta.url), "utf-8")
);

const getTechnologies = (req, res) => {
    res.status(200).json({
        status: "success",
        results: technologies.length,
        data: { technologies: technologies },
    });
};

const router = express.Router();
router.route("/").get(getTechnologies);

export { router };
