// Chatbot Elements

document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/pages/homepage/homepage.html'; // Redirect to login page
    }
});

const chatbotButton = document.getElementById('chatbotButton');
const chatbotContainer = document.querySelector('.chatbot-container');
const closeChatbot = document.getElementById('closeChatbot');
const sendMessage = document.getElementById('sendMessage');
const userInput = document.getElementById('userInput');
const chatContent = document.getElementById('chatContent');

function logout(){
    fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'bearer '+localStorage.getItem("token")
        },
        body: JSON.stringify({ email: localStorage.getItem("userName"),
            token: localStorage.getItem("token")
         })
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            localStorage.clear();
            alert("Logged out successfully")
            window.location.pathname = "/";
        }else{
            alert("Unable to logout !")
        }
           
    })
    .catch(error => {
        console.error('Error:', error);
    });
   
}

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
    debugger
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
    messageElement.innerHTML = message;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Bot Response Logic
function botResponse(userMessage) {
        fetch('http://localhost:5000/api/chat/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'bearer '+localStorage.getItem("token")
            },
            body: JSON.stringify({ message: userMessage })
        })
        .then(response => {
            if(response.status === 401){
                window.location.pathname = "/";
            }else
            return response.json()
        })
        .then(data => {
            debugger
            // Append bot response to the chatbox
            addMessage('bot', data.message)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}