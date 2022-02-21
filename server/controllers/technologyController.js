import { Technology } from "../models/technologyModel.js";
import { catchAsync } from "../utils/catchAsync.js";

export const createTechnology = catchAsync(async (req, res, next) => {
    const technology = await Technology.create(req.body);

    res.status(201).json({
        status: "success",
        data: {
            technology,
        },
    });
});

export const getAllTechnologies = catchAsync(async (req, res, next) => {
    const technology = await Technology.find();

    res.status(200).json({
        status: "success",
        results: technology.length,
        data: { technology },
    });
});

export const getTechnology = catchAsync(async (req, res, next) => {
    const technology = await Technology.findById(req.params.id);

    res.status(200).json({
        status: "success",
        data: { technology },
    });
});

export const updateTechnology = catchAsync(async (req, res, next) => {
    const technology = await Technology.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );

    res.status(200).json({
        status: "success",
        data: { technology },
    });
});

export const deleteTechnology = catchAsync(async (req, res, next) => {
    await Technology.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status: "success",
        data: null,
    });
});
