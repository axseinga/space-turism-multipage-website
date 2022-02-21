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
            required: [true, "A technology should have a photo"],
        },
        landscape: {
            type: String,
        },
    },
    description: {
        type: String,
        required: [true, "A technology must have a description"],
        trim: true,
    },
});

export const Technology = mongoose.model("Technology", technologySchema);
