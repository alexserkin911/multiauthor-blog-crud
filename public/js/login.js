const { loginForm } = document.forms;

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      const dataset = new FormData(loginForm);
      const response = await fetch('/entries/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(dataset)),
      });
      const data = await response.json();
      // const loginError = document.getElementById('loginError');
      const emailError = document.querySelector('#email-input');
      const passwordError = document.querySelector('#password-input');

      if (data.userName) {
        window.location.href = '/entries';
      } else if (data.msg2) {
        emailError.setCustomValidity(data.msg2);
        emailError.reportValidity();

        setTimeout(() => {
          //  emailError.value = '';
          emailError.blur();
          passwordError.blur();
          emailError.setCustomValidity('');
          loginForm.reset();
        }, 3000);
        //   loginError.textContent = data.msg2;
        //   loginError.style.display = 'block';
      } else {
        passwordError.setCustomValidity(data.msg1);
        passwordError.reportValidity();

        setTimeout(() => {
          passwordError.value = '';
          passwordError.setCustomValidity('');
        }, 3000);
        //   loginError.textContent = data.msg1;
        //   loginError.style.display = 'block';
      }
    } catch (error) {
      console.log(error);
    }
  });
}
