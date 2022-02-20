import { readFile } from "fs/promises";

const crew = JSON.parse(
    await readFile(new URL("../data/crew.json", import.meta.url), "utf-8")
);

export const getAllCrew = (req, res) => {
    res.status(200).json({
        status: "success",
        results: crew.length,
        data: { crew: crew },
    });
};

export const getCrewMember = (req, res) => {
    const id = req.params.id * 1;

    const crewMember = crew.crew.filter((el) => el.id === id);

    if (!crewMember) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }

    res.status(200).json({
        status: "success",
        data: { crewMember },
    });
};
