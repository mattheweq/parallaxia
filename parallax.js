const parallax = document.querySelector('.parallax');
const inner = document.querySelector('.inner');
// const inner2 = document.querySelector('.inner2');
const inner3 = document.querySelector('.inner3');
const test = document.querySelector('.test-bg');

window.addEventListener('scroll', function () {
    let scrollPosition = window.pageYOffset;
    
    parallax.style.backgroundPositionY = -scrollPosition * 0.1 + 'px';
    
    inner.style.backgroundPositionY = -scrollPosition * 0.1 + 'px';
    
    // inner2.style.backgroundPositionY = -scrollPosition * -0.1 + 'px';
    
    inner3.style.backgroundPositionY = -scrollPosition * -0.1 + 'px';


    test.style.top = -scrollPosition * 0.5 + 'px';
});
