import { Destination } from "../models/destinationModel.js";

export const createDestination = async (req, res) => {
    try {
        const destination = await Destination.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                destination,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

export const getAllDestinations = async (req, res) => {
    try {
        const destination = await Destination.find();

        res.status(200).json({
            status: "success",
            results: destination.length,
            data: { destination },
        });
    } catch (err) {
        res.status(404).json({ status: "fail", message: err });
    }
};

export const getDestination = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: { destination },
        });
    } catch (err) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }
};

export const updateDestination = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: "success",
            data: { destination },
        });
    } catch (err) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }
};

export const deleteDestination = async (req, res) => {
    try {
        await Destination.findByIdAndDelete(req.params.id);

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
