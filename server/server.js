import app from "./index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, { useNewUrlParser: true }, () =>
    console.log("connected to db!")
);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
