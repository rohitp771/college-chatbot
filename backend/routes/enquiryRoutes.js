const express = require('express');
const { submitEnquiry, getAllEnquiries } = require('../controllers/enquiryController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/submit', submitEnquiry);
router.get('/all', getAllEnquiries);

module.exports = router;
