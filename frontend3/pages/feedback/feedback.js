document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.rate');
    const submitBtn = document.getElementById('submit-btn');
    const thankYouMessage = document.getElementById('thank-you');
    const commentsTextArea = document.getElementById('comments');
    let rating = null;

    // Handle rating button clicks
    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            rating = button.innerText;
            ratingButtons.forEach(btn => btn.style.backgroundColor = "#ddd");
            button.style.backgroundColor = "#f1b500"; // Highlight the selected rating
        });
    });

    // Handle submit feedback button
    submitBtn.addEventListener('click', () => {
        if (rating && commentsTextArea.value.trim() !== "") {
            // Simulate form submission
            setTimeout(() => {
                thankYouMessage.classList.add('active'); // Show Thank you message with animation
                setTimeout(() => {
                    thankYouMessage.classList.remove('active');
                }, 3000); // Hide after 3 seconds
            }, 300);
        } else {
            alert("Please fill out the rating and comment fields!");
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const emojis = document.querySelectorAll('.emoji');
    const feedbackMessage = document.getElementById('feedback-message');
    const submitButton = document.getElementById('submit-feedback');
    let selectedFeedback = null;
    emojis.forEach(emoji => {
        emoji.addEventListener('click', function () {
            emojis.forEach(e => e.classList.remove('selected'));
            emoji.classList.add('selected');
            selectedFeedback = emoji.getAttribute('data-feedback');
            feedbackMessage.textContent = `You selected: ${emoji.textContent} (${selectedFeedback})`;
        });
    });

    const submitEnquiry = async (rating, comment) => {
        try {
          const response = await fetch("http://localhost:5000/api/feedbacks/submitFeedback", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              rating,
              comment,
            }),
          });
      
          if (response.ok) {
            alert("Feedback submitting successfully");
          } else {
           alert("Error submitting feedback");
          }
        } catch (error) {
            alert("Error submitting feedback");
        }
      };

    submitButton.addEventListener('click', function () {
        if (selectedFeedback) {
            const comments = document.getElementById('comments').value;
            submitEnquiry(selectedFeedback, comments);
        } else {
            alert('Please select an emoji to submit feedback.');
        }
    });
});

