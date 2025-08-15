document.addEventListener('DOMContentLoaded', () => {
    // === Mengatur status 'liked' saat halaman dimuat ===
    const heartIcons = document.querySelectorAll('.heart-icon');
    heartIcons.forEach(icon => {
        const parentElement = icon.closest('.gallery-item, .elaina-item-img');
        if (parentElement) {
            const imageElement = parentElement.querySelector('img');
            if (imageElement && localStorage.getItem(imageElement.src) === 'liked') {
                icon.classList.add('liked');
            }
        }
    });

    // === Event Delegation untuk semua ikon love yang diklik ===
    document.body.addEventListener('click', (e) => {
        const icon = e.target.closest('.heart-icon');
        if (icon) {
            e.stopPropagation();

            const parentElement = icon.closest('.gallery-item, .elaina-item-img');
            if (!parentElement) return;

            const imageElement = parentElement.querySelector('img');
            if (imageElement) {
                const imageId = imageElement.src;

                if (icon.classList.contains('liked')) {
                    icon.classList.remove('liked');
                    localStorage.removeItem(imageId);
                } else {
                    icon.classList.add('liked');
                    localStorage.setItem(imageId, 'liked');
                }
            }
        }
    });
});
