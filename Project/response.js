document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('applicationForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    message.textContent = 'Form submitted successfully!';
    message.style.color = 'green';
  });

  function validateForm() {
    let isValid = true;

    // Validate each required field
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      if (input.hasAttribute('required') && input.value.trim() === '') {
        isValid = false;
        showMessage('Please fill in all required fields.', 'red');
      }
    });

    return isValid;
  }

  function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
  }
});
