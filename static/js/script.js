document.addEventListener('DOMContentLoaded', function() {
    // === Fungsionalitas Dark Mode / Light Mode ===
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
        } else {
            body.classList.add('light-mode');
        }
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            }
        });
    }

    // === Fungsionalitas Menu Toggle untuk Mobile ===
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-nav');

    if (menuToggle && headerNav) {
        menuToggle.addEventListener('click', function() {
            headerNav.classList.toggle('active');
        });

        const navLinks = headerNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (headerNav.classList.contains('active')) {
                    headerNav.classList.remove('active');
                }
            });
        });
    }
});

function changeCssVariable(variableName, value) {
    document.documentElement.style.setProperty(variableName, value);
}

var backToTopBtn = document.getElementById("backToTopBtn");

// Tampilkan atau sembunyikan tombol saat scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Fungsi untuk kembali ke atas saat tombol diklik
backToTopBtn.addEventListener("click", function(e) {
    e.preventDefault(); // Mencegah link pindah halaman
    document.body.scrollTop = 0; // Untuk Safari
    document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
});
