document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    
    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your message has been sent! We will get back to you shortly.");
        form.reset();
    });
});
