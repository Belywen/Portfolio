const burgerBtn = document.querySelector('.burger_button');
const navLinks = document.querySelector('ul');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Ajoutez cet événement pour fermer le menu lorsque la croix est cliquée
const closeButton = document.querySelector('ul::before');
closeButton.addEventListener('click', () => {
    burgerBtn.classList.remove('open');
    navLinks.classList.remove('open');
});
