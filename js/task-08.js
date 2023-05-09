const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

// Обробник події відправлення форми
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Забороняємо перезавантаження сторінки

  // Перевіряємо, чи заповнені всі поля
  if (emailInput.value === '' || passwordInput.value === '') {
    alert('All fields must be filled!'); // Виводимо повідомлення
    return; // Зупиняємо обробку форми
  }

  // Збираємо значення полів у об'єкт
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  // Виводимо об'єкт із введеними даними в консоль
  console.log(formData);

  loginForm.reset(); // Очищуємо значення полів форми
});
