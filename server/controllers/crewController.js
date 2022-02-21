import { Crew } from "../models/crewModel.js";

export const createCrewMember = async (req, res) => {
    try {
        const crewMember = await Crew.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                crewMember,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

export const getAllCrew = async (req, res) => {
    try {
        const crew = await Crew.find();

        res.status(200).json({
            status: "success",
            results: crew.length,
            data: { crew },
        });
    } catch (err) {
        res.status(404).json({ status: "fail", message: err });
    }
};

export const getCrewMember = async (req, res) => {
    try {
        const crewMember = await Crew.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: { crewMember },
        });
    } catch (err) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }
};

export const updateCrewMember = async (req, res) => {
    try {
        const crewMember = await Crew.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: "success",
            data: { crewMember },
        });
    } catch (err) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }
};

export const deleteCrewMember = async (req, res) => {
    try {
        await Crew.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "success",
            data: null,
        });
    } catch (err) {
        return res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};
