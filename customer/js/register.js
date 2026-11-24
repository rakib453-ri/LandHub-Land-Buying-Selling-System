document.getElementById('customerRegisterForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('customerName').value.trim();
  const email = document.getElementById('customerEmail').value.trim();
  const password = document.getElementById('customerPassword').value;
  const confirm = document.getElementById('customerConfirmPassword').value;
  const phone = document.getElementById('customerPhone').value.trim();
  const message = document.getElementById('customerMessage');

  if (!/^[A-Za-z][A-Za-z ]{2,49}$/.test(name)) message.innerHTML = 'Name should contain only letters and at least 3 characters.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) message.innerHTML = 'Enter a valid email address.';
  else if (password.length < 6 || !/[0-9]/.test(password)) message.innerHTML = 'Password is too weak: use 6 characters and a number.';
  else if (password !== confirm) message.innerHTML = 'Passwords do not match.';
  else if (!/^01[3-9][0-9]{8}$/.test(phone)) message.innerHTML = 'Phone number must be an 11-digit Bangladesh mobile number.';
  else { message.innerHTML = 'Customer registration successful!'; }
});