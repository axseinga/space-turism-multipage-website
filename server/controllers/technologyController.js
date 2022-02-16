import { readFile } from "fs/promises";

const technologies = JSON.parse(
    await readFile(new URL("../data/technology.json", import.meta.url), "utf-8")
);

export const getAllTechnologies = (req, res) => {
    res.status(200).json({
        status: "success",
        results: technologies.length,
        data: { technologies: technologies },
    });
};

export const getTechnology = (req, res) => {
    const id = req.params.id * 1;

    const technology = technologies.technologies.filter((el) => el.id === id);

    if (!technology) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }

    res.status(200).json({
        status: "success",
        data: { technology },
    });
};
