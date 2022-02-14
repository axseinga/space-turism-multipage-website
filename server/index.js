import express from "express";
import { readFile } from "fs/promises";

const PORT = process.env.PORT || 3001;

const app = express();

const destinations = JSON.parse(
    await readFile(new URL("data/destination.json", import.meta.url), "utf-8")
);

const crew = JSON.parse(
    await readFile(new URL("data/crew.json", import.meta.url), "utf-8")
);

const technologies = JSON.parse(
    await readFile(new URL("data/technology.json", import.meta.url), "utf-8")
);

const getDestinations = (req, res) => {
    res.status(200).json({
        status: "success",
        results: destinations.length,
        data: { destinations: destinations },
    });
};

const getCrew = (req, res) => {
    res.status(200).json({
        status: "success",
        results: crew.length,
        data: { crew: crew },
    });
};

const getTechnologies = (req, res) => {
    res.status(200).json({
        status: "success",
        results: technologies.length,
        data: { technologies: technologies },
    });
};

app.route("/api/v1/destinations").get(getDestinations);
app.route("/api/v1/crew").get(getCrew);
app.route("/api/v1/technologies").get(getTechnologies);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
