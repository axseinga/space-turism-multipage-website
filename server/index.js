import express from "express";
import { router as destinationRouter } from "./routes/destinationRoutes.js";
import { router as crewRouter } from "./routes/crewRoutes.js";
import { router as technologyRouter } from "./routes/technologyRoutes.js";

const PORT = process.env.PORT || 3001;

const app = express();

/*const destinations = JSON.parse(
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

const destinationRouter = express.Router();
destinationRouter.route("/").get(getDestinations);

const crewRouter = express.Router();
crewRouter.route("/").get(getCrew);

const technologyRouter = express.Router();

technologyRouter.route("/").get(getTechnologies);*/

app.use("/api/v1/destinations", destinationRouter);
app.use("/api/v1/crew", crewRouter);
app.use("/api/v1/technologies", technologyRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
