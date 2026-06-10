//Typing Effect
const text = "Front-End Developer & UI/UX Designer";
const target = document.querySelector('#home p');
let index = 0;

target.textContent = '';

function type() {
    if (index < text.length) {
        target.textContent += text[index];
        index++;
        setTimeout(type, 60); // Adjust typing speed here
    }
}

type();

//Highlight Active nav Link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#7A88A8'; // Reset color for all links
        if (link.getAttribute('href')=== '#' + current) {
            link.style.color = '#4F8EF7'; // Highlight active link
        }
    });
});