import express from "express";
import { router as destinationRouter } from "./routes/destinationRoutes.js";
import { router as crewRouter } from "./routes/crewRoutes.js";
import { router as technologyRouter } from "./routes/technologyRoutes.js";
import { AppError } from "./utils/appError.js";
import globalErrorHandler from "./controllers/errorController.js";

const app = express();
app.use(express.json());

app.use("/api/v1/destinations", destinationRouter);
app.use("/api/v1/crew", crewRouter);
app.use("/api/v1/technologies", technologyRouter);

app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

app.use(globalErrorHandler);

export default app;
