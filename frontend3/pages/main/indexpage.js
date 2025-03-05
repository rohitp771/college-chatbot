// Chatbot Elements
const chatbotButton = document.getElementById('chatbotButton');
const chatbotContainer = document.querySelector('.chatbot-container');
const closeChatbot = document.getElementById('closeChatbot');
const sendMessage = document.getElementById('sendMessage');
const userInput = document.getElementById('userInput');
const chatContent = document.getElementById('chatContent');

// Toggle Chatbot Visibility
chatbotButton.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
    chatbotButton.style.display = 'none';
});

closeChatbot.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
    chatbotButton.style.display = 'block';
});

// Handle Messages
sendMessage.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage('user', userMessage);
        userInput.value = '';
        botResponse(userMessage);
    }
});

// Add Message to Chat
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = message;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Bot Response Logic
function botResponse(userMessage) {
    const responses = {
        hello: "Hi! How can I assist you today?",
        admission: "We provide expert guidance for college admissions.",
        fees: "Our services are affordable. Contact us for details.",
    };

    const botMessage = responses[userMessage.toLowerCase()] || "I'm sorry, I didn't understand that.";
    setTimeout(() => addMessage('bot', botMessage), 500);
}