const parallaxImage1 = document.getElementById('parallax-image-1');
const parallaxImage2 = document.getElementById('parallax-image-2');
const parallaxText1 = document.getElementById('parallax-text-1');
const parallaxText2 = document.getElementById('parallax-text-2');
const redSection = document.getElementById('red-section');

window.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;

    // Adjust the translate value and multiplier for the desired parallax effect
    parallaxImage1.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    parallaxImage2.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    parallaxText1.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    parallaxText2.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    redSection.style.transform = `translateY(${scrollPosition * 0.1}px)`;
});
