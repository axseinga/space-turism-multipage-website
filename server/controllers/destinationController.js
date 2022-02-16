import { readFile } from "fs/promises";

const destinations = JSON.parse(
    await readFile(
        new URL("../data/destination.json", import.meta.url),
        "utf-8"
    )
);

export const getAllDestinations = (req, res) => {
    res.status(200).json({
        status: "success",
        results: destinations.length,
        data: { destinations: destinations },
    });
};

export const getDestination = (req, res) => {
    const id = req.params.id * 1;

    const destination = destinations.destinations.filter((el) => el.id === id);

    if (!destination) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }

    res.status(200).json({
        status: "success",
        data: { destination },
    });
};
