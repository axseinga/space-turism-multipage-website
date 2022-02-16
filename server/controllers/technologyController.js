import { readFile } from "fs/promises";

const technologies = JSON.parse(
    await readFile(new URL("../data/technology.json", import.meta.url), "utf-8")
);

export const getTechnologies = (req, res) => {
    res.status(200).json({
        status: "success",
        results: technologies.length,
        data: { technologies: technologies },
    });
};
