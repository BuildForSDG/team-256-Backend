const User = require('../models/User');
const asyncHandler = require('../middleware/async');

// @desc  Get a single user
// route  GET /api/v1/users/:id
// access Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'get a single user by id',
	});
});

// @desc  create  user
// route  POST /api/v1/users/
// access Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'create a new user by admin',
	});
});

// @desc  get  users
// route  GET /api/v1/users/
// access Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'Get all users from the database',
	});
});

// @desc  udate  user
// route  PUT /api/v1/users/:id
// access Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'update users details',
	});
});

// @desc  delete  user
// route  DELETE /api/v1/users/:id
// access Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'Delete user from the database',
	});
});
