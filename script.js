// Инициализация презентации Reveal.js
Reveal.initialize({
    // Управление
    controls: true,       // Показывать стрелки навигации
    progress: true,       // Показывать полосу прогресса
    slideNumber: true,    // Показывать номер слайда
    hash: true,           // Добавлять хэш в URL (удобно для навигации)

    // Внешний вид
    center: true,         // Центрировать контент по вертикали
    transition: 'slide',  // Эффект перехода ('slide', 'fade', 'convex', 'concave', 'zoom', 'none')
    transitionSpeed: 'default', // Скорость перехода

    // Управление клавиатурой
    keyboard: true,

    // Автоматическая анимация фрагментов (если будешь использовать)
    fragments: true
});
