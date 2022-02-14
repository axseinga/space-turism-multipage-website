import express from "express";
import { readFile } from "fs/promises";

const crew = JSON.parse(
    await readFile(new URL("../data/crew.json", import.meta.url), "utf-8")
);

const getCrew = (req, res) => {
    res.status(200).json({
        status: "success",
        results: crew.length,
        data: { crew: crew },
    });
};

const router = express.Router();
router.route("/").get(getCrew);

export { router };
