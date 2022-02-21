import mongoose from "mongoose";

const crewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A crew member must have a name"],
        unique: true,
    },
    images: {
        png: {
            type: String,
            required: [true, "A crew member should have a photo"],
        },
        webp: {
            type: String,
        },
    },
    role: {
        type: String,
        required: [true, "A crew member must have a role"],
    },
    bio: {
        type: String,
        required: [true, "A crew member must have a bio"],
        trim: true,
    },
});

export const Crew = mongoose.model("Crew", crewSchema);
