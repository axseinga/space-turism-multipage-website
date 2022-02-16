import express from "express";
import { router as destinationRouter } from "./routes/destinationRoutes.js";
import { router as crewRouter } from "./routes/crewRoutes.js";
import { router as technologyRouter } from "./routes/technologyRoutes.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use("/api/v1/destinations", destinationRouter);
app.use("/api/v1/crew", crewRouter);
app.use("/api/v1/technologies", technologyRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
