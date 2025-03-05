const Enquiry = require('../models/Enquiry');

const submitEnquiry = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newEnquiry = new Enquiry({ name, email, message });
    await newEnquiry.save();
    res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { submitEnquiry, getAllEnquiries };
