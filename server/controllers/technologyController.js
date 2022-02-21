import { Technology } from "../models/technologyModel.js";

export const createTechnology = async (req, res) => {
    try {
        const technology = await Technology.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                technology,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

export const getAllTechnologies = async (req, res) => {
    try {
        const technology = await Technology.find();

        res.status(200).json({
            status: "success",
            results: technology.length,
            data: { technology },
        });
    } catch (err) {
        res.status(404).json({ status: "fail", message: err });
    }
};

export const getTechnology = async (req, res) => {
    try {
        const technology = await Technology.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: { technology },
        });
    } catch (err) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }
};

export const updateTechnology = async (req, res) => {
    try {
        const technology = await Technology.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: "success",
            data: { technology },
        });
    } catch (err) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }
};

export const deleteTechnology = async (req, res) => {
    try {
        await Technology.findByIdAndDelete(req.params.id);

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
