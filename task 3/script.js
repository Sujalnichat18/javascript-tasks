// Select elements
const form = document.getElementById('myForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const togglePassword = document.getElementById('togglePassword');

// 11. Check Empty Input Field on Submit
form.addEventListener('submit', function(e) {
  if (email.value.trim() === '' || password.value.trim() === '' || confirmPassword.value.trim() === '') {
    alert('Please fill in all fields.');
    e.preventDefault(); // Stop form from submitting
  }
});

// 12. Validate Email Format
function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = 'Invalid email format';
  } else {
    emailError.textContent = '';
  }
}

// 13. Confirm Password Match
function validatePasswords() {
  if (password.value !== confirmPassword.value) {
    passwordError.textContent = 'Passwords do not match';
  } else {
    passwordError.textContent = '';
  }
}

// 14. Enable/Disable Submit Button
function checkFormCompletion() {
  validateEmail();
  validatePasswords();

  if (
    email.value.trim() !== '' &&
    password.value.trim() !== '' &&
    confirmPassword.value.trim() !== '' &&
    emailError.textContent === '' &&
    passwordError.textContent === ''
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// 15. Show/Hide Password
togglePassword.addEventListener('change', function() {
  const type = togglePassword.checked ? 'text' : 'password';
  password.type = type;
  confirmPassword.type = type;
});

// Listen to input events on all fields
email.addEventListener('input', checkFormCompletion);
password.addEventListener('input', checkFormCompletion);
confirmPassword.addEventListener('input', checkFormCompletion);