const User = require('../models/User');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc  Get a single user
// route  GET /api/v1/users/:id
// access Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.params.id);

	if (!user) {
		return next(
			new ErrorResponse(`no user found with id ${req.params.id}, 404`)
		);
	}

	res.status(200).json({
		success: true,
		data: user,
	});
});

// @desc  create  user
// route  POST /api/v1/users/
// access Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
	const users = await User.find();

	if (!users) {
		return next(new ErrorResponse(`no users in the database`, 404));
	}

	res.status(200).json({
		success: true,
		data: users,
	});
});

// @desc  get  users
// route  GET /api/v1/users/
// access Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
	const { email, password, name, role } = req.body;
	const user = await User.create({
		email,
		name,
		password,
		role,
	});

	res.status(200).json({
		success: true,
		data: user,
	});
});

// @desc  udate  user
// route  PUT /api/v1/users/:id
// access Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
	const user = await User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(200).json({
		success: true,
		data: user,
	});
});

// @desc  delete  user
// route  DELETE /api/v1/users/:id
// access Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
	await User.findByIdAndDelete(req.params.id);

	res.status(200).json({
		success: true,
		data: {},
	});
});
