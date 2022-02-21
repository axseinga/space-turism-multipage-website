import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A destination must have a name"],
        unique: true,
    },
    images: {
        png: {
            type: String,
        },
        webp: {
            type: String,
        },
    },
    description: {
        type: String,
        required: [true, "A destination must have a description"],
    },
    distance: {
        type: String,
        required: [true, "A distance is required"],
    },
    travel: {
        type: String,
        required: [true, "Travel time is required"],
    },
});

export const Destination = mongoose.model("Destination", destinationSchema);
