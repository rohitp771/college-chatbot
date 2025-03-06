function checkAuthentication() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        // Redirect to login page if token doesn't exist
        window.location.href = '/';
    }

    // Optionally, you can validate the token here by calling your API server
    // For example, checking the token expiration date, or verifying the token.

    console.log('Token exists:', token); // For demonstration purposes
}

// Call the authentication check on page load
checkAuthentication();