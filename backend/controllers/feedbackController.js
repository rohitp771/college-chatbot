const Feedback = require('../models/Feedback');

const submitFeedback = async (req, res) => {
  const { rating, comment } = req.body;
  console.log("submitFeedback API Called .....")
  try {
    const newFeedback = new Feedback({ rating, comment  });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { submitFeedback, getAllFeedbacks };
