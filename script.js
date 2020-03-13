const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {

MENU.querySelectorAll('.name_button_menu').forEach(el => el.classList.remove('active'));
event.target.classList.add('active');
})