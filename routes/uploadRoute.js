const uploadController = require("../controllers/uploadController");

const express = require('express');

const router = express.Router();

router.post('/video', uploadController.uploadNewVideo);

router.get('/get-videos', uploadController.getAllVideos);

module.exports = router;