const express = require('express');
const {
	getCrop,
	getCrops,
	createCrop,
	updateCrop,
	deleteCrop,
} = require('../controllers/crops');

const Crop = require('../models/Crop');

const router = express.Router();
// const { protect, authorize } = require('../middleware/auth');

// router.use(protect);
// router.use(authorize('admin'));

router.route('/').get(getCrops).post(createCrop);
router.route('/:id').get(getCrop).put(updateCrop).delete(deleteCrop);

module.exports = router;
