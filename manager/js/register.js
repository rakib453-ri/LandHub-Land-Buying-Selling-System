document.getElementById('managerRegisterForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('managerName').value.trim();
  const email = document.getElementById('managerEmail').value.trim();
  const password = document.getElementById('managerPassword').value;
  const confirm = document.getElementById('managerConfirmPassword').value;
  const employeeId = document.getElementById('employeeId').value.trim();
  const experience = document.getElementById('managerExperience').value;
  const expertise = document.getElementById('managerExpertise').value.trim();
  const message = document.getElementById('managerMessage');

  if (!/^[A-Za-z][A-Za-z ]{2,49}$/.test(name)) message.innerHTML = 'Manager name should contain only letters.';
  else if (!/^[^\s@]+@(landhub|company)\.[a-z]{2,}$/.test(email)) message.innerHTML = 'Manager email must use a LandHub or company domain.';
  else if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) message.innerHTML = 'Manager password needs 8 characters, an uppercase letter, and a number.';
  else if (password !== confirm) message.innerHTML = 'Passwords do not match.';
  else if (!/^MGR-[0-9]{4}$/.test(employeeId)) message.innerHTML = 'Employee ID must use the format MGR-1234.';
  else if (experience === '' || Number(experience) < 1 || Number(experience) > 40) message.innerHTML = 'Experience must be between 1 and 40 years.';
  else if (expertise.length < 10) message.innerHTML = 'Operations expertise must contain at least 10 characters.';
  else { message.innerHTML = 'Manager registration successful!'; }
});