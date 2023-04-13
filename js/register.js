// navbar togglemenu start
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}
// navbar togglemenu end


const form = document.querySelector('.form'),
      formName = document.querySelector('.name'),
      warning = document.querySelectorAll('.warning'),
      relation = document.querySelector('.relationship'),
      username = document.querySelector('.username'),
      password = document.querySelector('.password'),
      pass = document.querySelector('.pass'),
      regBtn = document.querySelector('.regBtn');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!formName.value) {
          warning[0].textContent = "Iltimos formani to'ldiring";
          formName.classList.add('form-warning');
        }
        else {
          warning[0].textContent = '';
          formName.classList.remove('form-warning');
        }

        if (!relation.value) {
          warning[1].textContent = "Please enter your Lastname";
          relation.classList.add('form-warning');
        }
        else {
          warning[1].textContent = '';
          relation.classList.remove('form-warning');
        }
        if (!username.value) {
          warning[2].textContent = "Please enter a username";
          username.classList.add('form-warning');
        }
        else {
          warning[2].textContent = '';
          relation.classList.remove('form-warning');
        }
        if (!password.value) {
          warning[3].textContent = "Please enter a password";
          password.classList.add('form-warning');
        }
        else {
          warning[3].textContent = '';
          relation.classList.remove('form-warning');
        }
        if (!pass.value) {
          warning[4].textContent = "Please enter Confirm password";
          pass.classList.add('form-warning');
        }
        else {
          warning[4].textContent = '';
          relation.classList.remove('form-warning');
        }
      })
