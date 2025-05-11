// registration.js
document.getElementById('registration-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Check if passwords match
  if (password !== confirmPassword) {
    document.getElementById('error-message').textContent = "Passwords do not match!";
    return;
  }

  // Firebase Authentication - create new user
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registered successfully
      alert('Registration Successful!');
      window.location.href = 'login.html';  // Redirect to login page
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('error-message').textContent = errorMessage;
    });
});
