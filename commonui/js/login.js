document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;
  const message = document.getElementById('loginMessage');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    message.innerHTML = 'Email address cannot be empty.';
  } else if (!emailPattern.test(email)) {
    message.innerHTML = 'Enter a valid email address.';
  } else if (password === '') {
    message.innerHTML = 'Password cannot be empty.';
  } else if (password.length < 6) {
    message.innerHTML = 'Password must contain at least 6 characters.';
  } else if (!/[0-9]/.test(password)) {
    message.innerHTML = 'Password must contain at least one number.';
  } else if (role === '') {
    message.innerHTML = 'Please select a user category.';
  } else {
    message.innerHTML = 'Login successful!';
    window.location.href = '../' + role + '/profile.html';
  }
});