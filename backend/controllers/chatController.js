const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const chatData = require("../chatbot/chatData")

const queryResponse = async (req, res) => {
  const { query } = req.body;
  let response = chatData["default"];
  try {
    const cleanedQuery = req.body.message.toLowerCase().trim();
    
    if (chatData[cleanedQuery]) {
      response= chatData[cleanedQuery];
  }

  for (const [key, value] of Object.entries(chatData)) {
      if (value.pattern && value.pattern.test(cleanedQuery)) {
        response = value.response;
      }
  }
    
    res.status(200).json({ message: response });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { queryResponse };
