const auth = firebase.auth();

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log('Logged in:', user);
            window.location.href = '/dashboard'; // Redirect to dashboard or home page
        })
        .catch(error => {
            console.error('Error logging in:', error);
            alert('Error: ' + error.message);
        });
});
