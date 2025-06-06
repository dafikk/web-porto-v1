// Animasi Untuk Loading Page nya
$(window).on('load', function () {
    $('.spin-wrapper').fadeOut(1000);
});

// Navbar Responsive
function onToggleMenu(e) {
    const navLinks = document.querySelector('.nav-links');
    if (e.name === 'menu-outline') {
        e.name = 'close-outline';
        navLinks.classList.remove('top-[-1000%]');
        navLinks.classList.add('top-[10%]'); // Set to 100% of header height
    } else {
        e.name = 'menu-outline';
        navLinks.classList.remove('top-[10%]');
        navLinks.classList.add('top-[-1000%]');
    }
}

const navbar = document.getElementById('navbar');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('bg-slate-900/90', 'backdrop-blur-md', 'shadow-lg');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-slate-900/90', 'backdrop-blur-md', 'shadow-lg');
        navbar.classList.add('bg-transparent');
    }
});

// animasi fade in
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('[data-animate-on-scroll]');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = parseInt(element.dataset.delay) || 0;

                setTimeout(() => {
                    element.classList.remove('opacity-0', 'translate-y-12');
                    element.classList.add('opacity-100', 'translate-y-0');
                }, delay);

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    animateElements.forEach(element => {
        observer.observe(element);
    });
});

// text run
const typedTextSpan = document.getElementById('typedText');
const textArray = ["Front End Web", "Desain Visual", "UI/UX Designer", "Video Editing"];
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenTexts = 1500;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, deletingSpeed);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingSpeed + 100);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(type, 500);
});

// project
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            id: 1,
            title: 'Website Kelass',
            description: 'Ini adalah project pertama saya. Saya membuat ini dengan ilmu coding yang benar-benar masih sedikit. Namun saya sangat senang saat saya melihat hasilnya :)',
            technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
            link: 'https://xiitkj.vercel.app/',
            image: '../img/Screenshot 2025-06-06 091029.png'
        },
        {
            id: 2,
            title: 'Kalkulator RSS ROK(Rise of Kingdoms)',
            description: 'Kalkulator tersebut memiliki fitur yang bertujuan untuk memudahkan player ROK dalam menghitung jumlah stock RSS mereka yang dapat dikirim',
            technologies: ['Javascript', 'Tailwind CSS'],
            link: 'comingsoon.html',
            image: '../img/comingsoon.jpg'
        }
    ];

    const projectListContainer = document.getElementById('project-list');

    function renderProjects() {
        projectListContainer.innerHTML = '';

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = `group relative bg-white rounded-lg shadow-md p-6 transform transition-transform hover:scale-105 overflow-hidden
                                     bg-cover bg-center text-white flex flex-col justify-between`;


            projectCard.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${project.image}')`;
            projectCard.style.minHeight = '250px';

            projectCard.innerHTML = `
                <div>
                    <h2 class="text-2xl font-semibold mb-2">${project.title}</h2>
                    <div class="mb-4">
                        <span class="font-medium">Teknologi:</span>
                        ${project.technologies.map(tech => `<span class="inline-block bg-white/5 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <a href="${project.link}" class="text-blue-100 hover:text-blue-50 font-medium z-10 relative self-end">
                    View &rarr;
                </a>
                <div class="project-description absolute inset-0 backdrop-blur-md bg-opacity-90 text-white p-6 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    <p class="text-center text-lg">${project.description}</p>
                </div>
            `;
            projectListContainer.appendChild(projectCard);
        });
    }
    renderProjects();
});

// contact me
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const whatsappNumber = '6281377120177';
    const whatsappMessage = `Halo, saya ${name} dengan Email: ${email} \n${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    this.reset();
    alert('Pesan Anda akan segera dikirim ke WhatsApp!');
});