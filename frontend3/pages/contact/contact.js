document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    
    const submitEnquiry = async (name, email,message) => {
        try {
          const response = await fetch("http://localhost:5000/api/enquiries/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, email,message
            }),
          });
      
          if (response.ok) {
            alert("Enquiry submitting successfully");
            form.reset();
          } else {
           alert("Error submitting Enquiry");
          }
        } catch (error) {
            alert("Error submitting Enquiry");
        }
      };
    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        submitEnquiry(name,email,message);
       
    });
});
