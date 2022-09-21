const express = require('express');
const uploadController = require('../controllers/uploadController');

const router = express.Router();

router
  .route('/')
  .post(uploadController.uploadFile, uploadController.uploadFileHandler);

module.exports = router;
