const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const predefinedAnswers = {
  "hello": "Hi there! How can I help you today?",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name": "I am your AskAdmit  chatbot.",
  "bye": "Goodbye! Have a great day!",
  "default": "I'm sorry, I don't understand that. Can you please rephrase?"
};

const queryResponse = async (req, res) => {
  const { query } = req.body;
  try {
    const userMessage = req.body.message.toLowerCase().trim();
    const response = predefinedAnswers[userMessage] || predefinedAnswers["default"];
    res.status(200).json({ message: response });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { queryResponse };
