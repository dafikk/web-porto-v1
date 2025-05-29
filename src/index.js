// Animasi Untuk Loading Page nya
$(window).on('load', function(){
    $('.spin-wrapper').fadeOut(1000);
});

// Navbar Responsive
const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
    e.name= e.name ==='close' ? 'menu' : 'close'
    navLinks.classList.toggle('top-[80px]')
}


const typedTextSpan = document.getElementById('typedText');
        const textArray = ["Desain Grafis", "Pengembangan Web", "Strategi Digital", "Video Editing"];
        const typingSpeed = 150; // Kecepatan mengetik dalam ms (semakin kecil, semakin cepat)
        const deletingSpeed = 100; // Kecepatan menghapus dalam ms
        const delayBetweenTexts = 1500; // Jeda sebelum mengetik teks berikutnya dalam ms

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
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(type, 500); // Mulai setelah jeda singkat
        });