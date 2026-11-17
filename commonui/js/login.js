document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const role = document.getElementById('role').value;
  if (role) window.location.href = '../' + role + '/profile.html';
});