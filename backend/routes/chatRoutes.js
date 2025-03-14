const express = require('express');
const { queryResponse } = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/query', authMiddleware,queryResponse);

module.exports = router;
