// Отримання кнопки та меню
const toggleMenuButton = document.getElementById('toggleMenuButton');
const mainMenu = document.getElementById('mainMenu');

// Додавання обробника подій для кнопки
toggleMenuButton.addEventListener('click', function() {
    // Зміна класу для показу/приховування меню
    mainMenu.classList.toggle('active');
});
