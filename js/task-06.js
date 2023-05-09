const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const requiredLength = parseInt(validationInput.getAttribute('data-length'));
  const inputLength = validationInput.value.length;

  if (inputLength === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
