import express from "express";
import { readFile } from "fs/promises";

const PORT = process.env.PORT || 3001;

const app = express();

const destinations = await readFile(
    new URL("data/destination.json", import.meta.url),
    "utf-8"
);

app.get("/api/v1/destinations", (req, res) => {
    res.status(200).json({
        status: "success",
        data: { destinations: destinations },
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
