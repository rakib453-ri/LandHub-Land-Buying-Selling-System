document.getElementById('adminRegisterForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('adminName').value.trim();
  const email = document.getElementById('adminEmail').value.trim();
  const password = document.getElementById('adminPassword').value;
  const confirm = document.getElementById('adminConfirmPassword').value;
  const phone = document.getElementById('adminPhone').value.trim();
  const adminId = document.getElementById('adminId').value.trim();
  const approval = document.getElementById('approvalReason').value.trim();
  const startDate = document.getElementById('adminStartDate').value;
  const message = document.getElementById('adminMessage');

  if (!/^[A-Za-z][A-Za-z ]{2,49}$/.test(name)) message.innerHTML = 'Administrator name should contain only letters.';
  else if (!/^admin\.[^\s@]+@landhub\.[a-z]{2,}$/.test(email)) message.innerHTML = 'Admin email must use admin.name@landhub.domain format.';
  else if (password.length < 10 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) message.innerHTML = 'Admin password needs 10 characters with upper, lower, and number.';
  else if (password !== confirm) message.innerHTML = 'Passwords do not match.';
  else if (!/^01[3-9][0-9]{8}$/.test(phone)) message.innerHTML = 'Enter a valid 11-digit admin phone number.';
  else if (!/^ADM-[0-9]{5}$/.test(adminId)) message.innerHTML = 'Administrator ID must use the format ADM-12345.';
  else if (approval.length < 20) message.innerHTML = 'Approval reason must contain at least 20 characters.';
  else if (startDate === '') message.innerHTML = 'Select an access start date.';
  else { message.innerHTML = 'Administrator registration successful!'; }
});