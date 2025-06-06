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
        const scrollThreshold = 50; // Jarak scroll dalam piksel sebelum background berubah

        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollThreshold) {
                // Tambahkan kelas untuk background dan shadow saat di-scroll
                navbar.classList.add('bg-slate-900/90', 'backdrop-blur-md', 'shadow-lg');
                navbar.classList.remove('bg-transparent'); // Hapus background transparan
            } else {
                // Hapus kelas background dan shadow saat di atas threshold
                navbar.classList.remove('bg-slate-900/90', 'backdrop-blur-md', 'shadow-lg');
                navbar.classList.add('bg-transparent'); // Tambahkan kembali background transparan
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            const animateElements = document.querySelectorAll('[data-animate-on-scroll]');

            const observerOptions = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const delay = parseInt(element.dataset.delay) || 0; // Get delay from data-delay attribute

                        setTimeout(() => {
                            // Remove initial hidden/transformed state
                            element.classList.remove('opacity-0', 'translate-y-12');
                            // Add final visible state
                            element.classList.add('opacity-100', 'translate-y-0');
                        }, delay);

                        observer.unobserve(element); // Stop observing after animation
                    }
                });
            }, observerOptions);

            animateElements.forEach(element => {
                observer.observe(element);
            });
        });

// Untuk Run Textnya
const typedTextSpan = document.getElementById('typedText');
const textArray = ["Front End Web", "Desain Visual", "UI/UX Designer", "Video Editing"];
const typingSpeed = 150; // Kecepatan mengetik
const deletingSpeed = 100; // Kecepatan menghapus
const delayBetweenTexts = 1500; // Jeda sebelum mengetik teks berikutnya

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        // Selesai mengetik, tunggu sebentar lalu mulai menghapus
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, deletingSpeed);
    } else {
        // Selesai menghapus, pindah ke teks berikutnya
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0; // Kembali ke awal array jika sudah sampai akhir
        }
        setTimeout(type, typingSpeed + 100); // Sedikit jeda sebelum mengetik teks baru
    }
}

// Mulai efek pengetikan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(type, 500); // Mulai setelah jeda singkat
});