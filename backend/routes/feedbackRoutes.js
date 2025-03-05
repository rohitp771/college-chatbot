const express = require('express');
const { submitFeedback, getAllFeedbacks } = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/submitFeedback', submitFeedback);
router.get('/allFeedback', getAllFeedbacks);

module.exports = router;
