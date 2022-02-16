// ===========Mobile Menu=========
const button = document.getElementById('menu-button');
const menu = document.getElementById('menu');
button.addEventListener('click', function() {
    menu.classList.toggle('hidden');
});
// End Mobile Menu