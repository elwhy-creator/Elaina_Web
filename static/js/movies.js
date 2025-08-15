document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filter-button');
    const filterDropdown = document.querySelector('.filter-dropdown');

    if (filterButton && filterDropdown) {
        filterButton.addEventListener('click', function() {
            filterDropdown.classList.toggle('show');
            const arrow = this.querySelector('.arrow-down');
            arrow.textContent = filterDropdown.classList.contains('show') ? '▲' : '▼';
        });

        // Tutup dropdown jika klik di luar elemen filter
        window.addEventListener('click', function(event) {
            if (!event.target.matches('.filter-toggle') && !event.target.matches('#filter-button') && !event.target.matches('.arrow-down') && filterDropdown.classList.contains('show')) {
                filterDropdown.classList.remove('show');
                const arrow = filterButton.querySelector('.arrow-down');
                arrow.textContent = '▼';
            }
        });
    }
    // === Fungsionalitas Filter Galeri ===
    var filterButtons = document.querySelectorAll('.filter-btn');
    var galleryItems = document.querySelectorAll('.movie-item, .video-item, .image-item, .elaina-video-item, .elaina-item-img, .gallery-item');

    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var filterValue = this.getAttribute('data-filter');

            // Hapus kelas 'active' dari semua tombol dan tambahkan ke tombol yang diklik
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Tampilkan atau sembunyikan item galeri berdasarkan filter
            galleryItems.forEach(function(item) {
                var itemCategory = item.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.style.display = 'block'; // Tampilkan item
                } else {
                    item.style.display = 'none';  // Sembunyikan item
                }
            });
        });
    });
});
