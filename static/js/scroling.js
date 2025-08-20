// Arahkan ke container navigasi
const container = document.querySelector('.scrolling-nav-container');

// Arahkan ke tombol panah
const scrollBtnLeft = document.querySelector('.scroll-btn.left');
const scrollBtnRight = document.querySelector('.scroll-btn.right');

// Jumlah pixel yang akan digeser
const scrollAmount = 150;

// Tambahkan event listener ke tombol kanan
scrollBtnRight.addEventListener('click', () => {
    container.scrollLeft += scrollAmount;
});

// Tambahkan event listener ke tombol kiri
scrollBtnLeft.addEventListener('click', () => {
    container.scrollLeft -= scrollAmount;
});
