document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.querySelector('.gallery-grid');

    if (galleryGrid) {
        const jsonUrl = '/data/gallery.json';

        // --- Logika Utama: Mengisi Galeri ---
        fetch(jsonUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Gagal memuat data galeri.');
                }
                return response.json();
            })
            .then(data => {
                let htmlContent = '';
                data.forEach(item => {
                    // Cek status 'liked' dari localStorage
                    const likedState = localStorage.getItem(`liked-${item.src}`);
                    const heartClass = likedState === 'true' ? 'liked' : '';

                    htmlContent += `
                        <div class="gallery-item">
                            <img src="${item.src}" alt="${item.alt}" class="gallery-image" data-full-image="${item.src}" data-caption="${item.alt}">
                            <span class="heart-icon ${heartClass}"><i class="fas fa-heart"></i></span>
                        </div>
                    `;
                });
                galleryGrid.innerHTML = htmlContent;
            })
            .catch(error => {
                console.error('Ada masalah dengan fetch:', error);
                galleryGrid.innerHTML = '<p>Gagal memuat galeri. Coba lagi nanti.</p>';
            });
    }
});

