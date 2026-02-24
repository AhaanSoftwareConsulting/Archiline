const slider = document.getElementById('testSlider');
const cursor = document.querySelector('.slider-cursor');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');
const slides = slider.querySelectorAll('.test-slide');

let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

showSlide(index);

/* Nav click */
nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

/* Cursor logic (unchanged) */
slider.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const half = rect.width / 2;

    if (x < half) {
        prevBtn.classList.add('show');
        nextBtn.classList.remove('show');
    } else {
        nextBtn.classList.add('show');
        prevBtn.classList.remove('show');
    }
});

slider.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
});

slider.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    prevBtn.classList.remove('show');
    nextBtn.classList.remove('show');
});
