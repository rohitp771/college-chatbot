document.addEventListener("DOMContentLoaded", () => {

  localStorage.clear();

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;
    if (!email || !password) {
        alert("All fields are mandatory!");
    }else{
        loginUser(email,password)
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('reg-fullName').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-pass').value;
    const confirmPass = document.getElementById('reg-conf-pass').value;

    if (!fullName || !email || !password || !confirmPass) {
        alert("All fields are mandatory!");
        event.preventDefault();
    }else if(password !== confirmPass){
        alert("password and confirm password should match!");
        event.preventDefault();
    }else{
        registerUser(fullName,email,password)
    }
});

const registerUser = async (fullName,email,password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fullName,email,password
        }),
      });

      
  
      if (response.ok) {
        alert("User Registered successfully. Please login using same credentials.");
        document.getElementById('registerForm').reset();
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
      } else {
       alert("Error in User Registration");
      }
    } catch (error) {
      
        alert("Error in User Registration");
    }
  };

  const loginUser = async (email,password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,password
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("User logged in successfully");
        localStorage.setItem("userName",email);
        localStorage.setItem("token",data.token)
        document.getElementById('loginForm').reset();
        window.location.pathname = '/pages/main/index.html';
      } else {
       alert("Error in user login");
      }
    } catch (error) {
        alert("Error in user login");
    }
  };

});
