const uploadController = require("../controllers/uploadController");

const express = require('express');

const router = express.Router();

router.post('/video', uploadController.uploadNewVideo);

module.exports = router;