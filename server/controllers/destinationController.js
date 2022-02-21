import { Destination } from "../models/destinationModel.js";
import { catchAsync } from "../utils/catchAsync.js";
import { AppError } from "../utils/appError.js";

export const createDestination = catchAsync(async (req, res, next) => {
    const destination = await Destination.create(req.body);

    res.status(201).json({
        status: "success",
        data: {
            destination,
        },
    });
});

export const getAllDestinations = catchAsync(async (req, res, next) => {
    const destination = await Destination.find();

    res.status(200).json({
        status: "success",
        results: destination.length,
        data: { destination },
    });
});

export const getDestination = catchAsync(async (req, res, next) => {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
        return next(new AppError("No destination found with that ID", 404));
    }

    res.status(200).json({
        status: "success",
        data: { destination },
    });
});

export const updateDestination = catchAsync(async (req, res, next) => {
    const destination = await Destination.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );

    if (!destination) {
        return next(new AppError("No destination found with that ID", 404));
    }

    res.status(200).json({
        status: "success",
        data: { destination },
    });
});

export const deleteDestination = catchAsync(async (req, res, next) => {
    const destination = await Destination.findByIdAndDelete(req.params.id);
    
    if (!destination) {
        return next(new AppError("No destination found with that ID", 404));
    }

    res.status(204).json({
        status: "success",
        data: null,
    });
});
