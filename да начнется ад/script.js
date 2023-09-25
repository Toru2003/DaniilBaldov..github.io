//открытие и закрытие кнопки
function toggleInfo() {
    var info = document.getElementById("info");
    var button = document.querySelector(".info-button");

    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        button.textContent = "я узнал все"; 
    } else {
        info.style.display = "none";
        button.textContent = "я хочу знать больше"; 
    }
}


var currentPhotoIndex = 0; // Индекс текущей фотографии (начинаем с 0)
var photoArray = ["img/photo1.png", "img/photo2.png", "img/photo3.png", "img/photo4.png", "img/photo5.png", "img/photo6.png", "img/photo7.png"]; // Массив с названиями фотографий

function changePhoto() {
    var photo = document.querySelector(".photo");
    currentPhotoIndex++;
    
    // Если достигли конца массива, переходим к первой фотографии
    if (currentPhotoIndex >= photoArray.length) {
        currentPhotoIndex = 0;
    }

    photo.src = photoArray[currentPhotoIndex];
}

// Автоматическая смена фотографий каждые 5  секунды
setInterval(changePhoto, 6000);



//смена картинок
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slideimg");
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].style.display = "none";
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = "block";
    }

    document.getElementById("prevBtn").addEventListener("click", function () {
        showSlide(currentSlide - 1);
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        showSlide(currentSlide + 1);
    });

    // Показываем первый слайд
    showSlide(currentSlide);
});





// Дождемся, пока загрузится DOM
document.addEventListener("DOMContentLoaded", function () {
    // Получаем элемент заголовка по его классу
    var header = document.querySelector(".header");
  
    // Массив с разными текстами
    var texts = [
      "Чтобы изменить мир, нужно начать с себя.",
      "Если вы не рискуете, вы не можете создать будущее!",
      "Забудь о том, что невозможно. Сделай невозможное возможным! ",
      "Не бывает безвыходных ситуаций. Бывают ситуации, выход из которых тебя не устраивает."
    ];
  
    var currentIndex = 0; // Индекс текущего текста
  
    // Функция для изменения текста
    function changeText() {
      // Изменяем текст в элементе заголовка
      header.textContent = texts[currentIndex];
      
      // Увеличиваем индекс для следующего текста
      currentIndex = (currentIndex + 1) % texts.length;
    }
  
    // Вызываем функцию смены текста через определенный интервал времени
    setInterval(changeText, 10000); // Здесь 10000 миллисекунд (10 секунды) - интервал смены текста
  });
  