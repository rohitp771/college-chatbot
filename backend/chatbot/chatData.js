const chatData = {
    "hello": "Hi there! How can I help you today?", 
    "how are you": "I'm just a bot, but I'm doing great! How about you?", 
    "what is your name": "I am your AskAdmit. Nice to meet you!", 
    "bye": "Goodbye! Have a great day!", 
    "thank you": "You're welcome! 😊",
    
    "admission process":"You can follow steps <br> 1.Go to www.shiksha.com. <br>2.Click on Admission Link <br>3.Fill the admission form and submit.",
    "contact":"You can contact on below email or number <br>abc@college.com <br>9876543210",
    "admission date":"Admission Dates : 20 Aug 2025 to 30 Sept 2025",
    "seats":"Total 180 seats are available",

    "seats": { 
        pattern: /seats|seat|Quota/i,
        response: "Total 180 seats are available",
    },

    "admission date": { 
        pattern: /date|dates|admission\s*date|admission\s*dates/i,
        response: "Admission Dates : 20 Aug 2025 to 30 Sept 2025",
    },

    "admission process": { 
        pattern: /process|admission\s*form|admissions/i,
        response: "You can follow steps <br> 1.Go to www.shiksha.com. <br>2.Click on Admission Link <br>3.Fill the admission form and submit.",
    },

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
        response: "I am your AskAdmit chatbot. Nice to meet you!"
    },
  
    "default": "I'm sorry, I don't understand that. Can you please rephrase?"
  };


  module.exports = chatData;