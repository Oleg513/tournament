// Отримати кнопку та меню
const toggleMenuButton = document.getElementById('toggleMenuButton');
const mainMenu = document.getElementById('mainMenu');

// Додати обробник події для кнопки
toggleMenuButton.addEventListener('click', function() {
    // Змінити клас, щоб показати/сховати меню
    mainMenu.classList.toggle('active');
});
