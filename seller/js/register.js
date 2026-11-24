document.getElementById('sellerRegisterForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('sellerName').value.trim();
  const email = document.getElementById('sellerEmail').value.trim();
  const password = document.getElementById('sellerPassword').value;
  const confirm = document.getElementById('sellerConfirmPassword').value;
  const phone = document.getElementById('sellerPhone').value.trim();
  const nationalId = document.getElementById('sellerNationalId').value.trim();
  const taxId = document.getElementById('sellerTaxId').value.trim();
  const listingCount = document.getElementById('sellerListingCount').value;
  const message = document.getElementById('sellerMessage');

  if (!/^[A-Za-z][A-Za-z ]{2,49}$/.test(name)) message.innerHTML = 'Seller name should contain only letters.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) message.innerHTML = 'Enter a valid seller email.';
  else if (password.length < 7 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) message.innerHTML = 'Seller password needs 7 characters, one uppercase letter, and one number.';
  else if (password !== confirm) message.innerHTML = 'Passwords do not match.';
  else if (!/^01[3-9][0-9]{8}$/.test(phone)) message.innerHTML = 'Enter a valid 11-digit phone number.';
  else if (!/^[0-9]{10,17}$/.test(nationalId)) message.innerHTML = 'National ID must contain 10 to 17 digits.';
  else if (!/^TAX-[0-9]{6}$/.test(taxId)) message.innerHTML = 'Tax ID must use the format TAX-123456.';
  else if (Number(listingCount) < 1) message.innerHTML = 'Estimated listing count must be at least 1.';
  else { message.innerHTML = 'Seller registration successful!'; }
});