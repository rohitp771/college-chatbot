const chatData = {
    "hello": "Hi there! How can I help you today?", 
    "how are you": "I'm just a bot, but I'm doing great! How about you?", 
    "what is your name": "I am your friendly chatbot. Nice to meet you!", 
    "bye": "Goodbye! Have a great day!", 
    "thank you": "You're welcome! 😊",
    "admission":"You can follow steps <br> 1.Go to this. <br>2.Click on this <br>3.Follow steps",
    "contact":"You can contact on below email or number <br>abc@college.com <br>9876543210",
  
    "how are you": { 
        pattern: /how\s*(are|r)\s*you|how's\s*it\s*going|how\s*do\s*you\s*feel/i, 
        response: "I'm just a bot, but I'm doing great! How about you?"
    },
    "thank you": { 
        pattern: /thanks|thank\s*you|thx|thank\s*a\s*lot/i, 
        response: "You're welcome! 😊"
    },
    "bye": { 
        pattern: /goodbye|bye|see\s*you|catch\s*you\s*later/i, 
        response: "Goodbye! Have a great day!"
    },
    "hello": { 
        pattern: /hello|hi|hey|hiya/i, 
        response: "Hi there! How can I help you today?"
    },
    "what is your name": { 
        pattern: /what\s*is\s*your\s*name|who\s*are\s*you|name/i, 
        response: "I am your friendly chatbot. Nice to meet you!"
    },
  
    "default": "I'm sorry, I don't understand that. Can you please rephrase?"
  };


  module.exports = chatData;