import { readFile } from "fs/promises";

const crew = JSON.parse(
    await readFile(new URL("../data/crew.json", import.meta.url), "utf-8")
);

export const getCrew = (req, res) => {
    res.status(200).json({
        status: "success",
        results: crew.length,
        data: { crew: crew },
    });
};
