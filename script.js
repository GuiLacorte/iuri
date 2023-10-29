
// JavaScript para o carrossel de imagens automático
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides.forEach(slide => slide.style.display = 'none');
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = 'block';
    indicators[slideIndex - 1].classList.add('active');
    
    setTimeout(showSlides, 2200); // Muda a imagem a cada 2 segundos
}


// Add click event to indicators
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            slides.forEach(slide => slide.style.display = 'none');
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            slideIndex = index + 1;
            slides[slideIndex - 1].style.display = 'block';
            indicators[slideIndex - 1].classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            slides.forEach(slide => slide.style.display = 'none');
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            slideIndex = index + 1;
            slides[slideIndex - 1].style.display = 'block';
            indicators[slideIndex - 1].classList.add('active');
        });
    });
});

// Inicia o carrossel
showSlides();
// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', function() {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    });
});

// Sliding Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const slidingMenu = document.getElementById('sliding-menu');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    // Append the overlay to the body
    document.body.appendChild(overlay);

    // Toggle the sliding menu and overlay when the hamburger menu is clicked
    hamburgerMenu.addEventListener('click', function() {
        if (slidingMenu.classList.contains('active')) {
            slidingMenu.classList.remove('active');
            overlay.classList.remove('active');
        } else {
            slidingMenu.classList.add('active');
            overlay.classList.add('active');
        }
    });

    // Close the sliding menu and overlay when the overlay is clicked
    overlay.addEventListener('click', function() {
        slidingMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});
