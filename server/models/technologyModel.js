import mongoose from "mongoose";

const technologySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A technology must have a name"],
        unique: true,
    },
    images: {
        portrait: {
            type: String,
        },
        landscape: {
            type: String,
        },
    },
    description: {
        type: String,
        required: [true, "A technology must have a description"],
    },
});

export const Technology = mongoose.model("Technology", technologySchema);
