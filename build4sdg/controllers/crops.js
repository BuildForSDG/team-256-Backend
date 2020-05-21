const Crop = require('../models/Crop');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc  Get a single crop
// route  GET /api/v1/crops/:id
// access Private/Admin
exports.getCrop = asyncHandler(async (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'get a single crop by id',
	});
});

// @desc  create  crop
// route  POST /api/v1/crops/
// access Private/Admin
exports.getCrops = asyncHandler(async (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'route to get all crops in the database',
	});
});

// @desc  get  users
// route  GET /api/v1/crops/
// access Private/Admin
exports.createCrop = asyncHandler(async (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'create a crop',
	});
});

// @desc  udate  crop
// route  PUT /api/v1/crops/:id
// access Private/Admin
exports.updateCrop = asyncHandler(async (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'update cropinfo',
	});
});

// @desc  delete  crop
// route  DELETE /api/v1/crops/:id
// access Private/Admin
exports.deleteCrop = asyncHandler(async (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'delete a crop from the database',
	});
});
