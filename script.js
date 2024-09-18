// script.js
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector("#about p");
    const text = textElement.textContent;
    textElement.textContent = "";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Adjust typing speed here (lower is faster)
        }
    }

    typeWriter();
});

