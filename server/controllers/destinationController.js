import { readFile } from "fs/promises";

const destinations = JSON.parse(
    await readFile(
        new URL("../data/destination.json", import.meta.url),
        "utf-8"
    )
);

export const getDestinations = (req, res) => {
    res.status(200).json({
        status: "success",
        results: destinations.length,
        data: { destinations: destinations },
    });
};
