import { Crew } from "../models/crewModel.js";
import { catchAsync } from "../utils/catchAsync.js";
import { AppError } from "../utils/appError.js";

export const createCrewMember = catchAsync(async (req, res, next) => {
    const crewMember = await Crew.create(req.body);

    res.status(201).json({
        status: "success",
        data: {
            crewMember,
        },
    });
});

export const getAllCrew = catchAsync(async (req, res, next) => {
    const crew = await Crew.find();

    res.status(200).json({
        status: "success",
        results: crew.length,
        data: { crew },
    });
});

export const getCrewMember = catchAsync(async (req, res, next) => {
    const crewMember = await Crew.findById(req.params.id);

    if (!crewMember) {
        return next(new AppError("No member crew found with that ID", 404));
    }

    res.status(200).json({
        status: "success",
        data: { crewMember },
    });
});

export const updateCrewMember = catchAsync(async (req, res, next) => {
    const crewMember = await Crew.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!crewMember) {
        return next(new AppError("No member crew found with that ID", 404));
    }

    res.status(200).json({
        status: "success",
        data: { crewMember },
    });
});

export const deleteCrewMember = catchAsync(async (req, res, next) => {
    const crewMember = await Crew.findByIdAndDelete(req.params.id);

    if (!crewMember) {
        return next(new AppError("No member crew found with that ID", 404));
    }

    res.status(204).json({
        status: "success",
        data: null,
    });
});
