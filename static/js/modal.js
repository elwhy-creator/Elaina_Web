document.addEventListener('DOMContentLoaded', function() {

    // === DATA GAMBAR TERKAIT ===
    // (bagian ini tetap sama)
    var relatedImagesData = {
        "static/elaina.pc/001.jpg": [
        "static/elaina.pc/kawai4.jpeg",
        "static/elaina.pc/kawai2.jpg",
        "static/elaina.pc/kawai6.jpg",
        "static/elaina.pc/kawai3.jpg",
        "static/elaina.pc/kawai5.jpeg",
        "static/elaina.pc/kawai7.jpeg",
        "static/elaina.pc/kawai8.jpeg",
        "static/elaina.pc/kawai9.jpeg",
        "static/elaina.pc/kawai10.jpeg",
        "static/elaina.pc/kawai11.jpeg"
        ],
        "static/elaina.pc/onichan0.jpg": [
        "static/elaina.pc/sexy.jpg",
        "static/elaina.pc/sexy25.jpg",
        "static/elaina.pc/sexy26.jpg",
        "static/elaina.pc/sexy16.jpg",
        "static/elaina.pc/sexy27.jpg",
        "static/elaina.pc/sexy28.jpg",
        "static/elaina.pc/sexy29.jpg",
        "static/elaina.pc/sexy33.jpg"
        ],
        "static/elaina.pc/onichan1.jpg": [
        "static/elaina.pc/manis5.jpg",
        "static/elaina.pc/manis1.jpg",
        "static/elaina.pc/manis2.jpg",
        "static/elaina.pc/manis3.jpg",
        "static/elaina.pc/manis4.jpg",
        "static/elaina.pc/manis6.jpeg",
        "static/elaina.pc/manis7.jpeg",
        "static/elaina.pc/manis8.jpeg",
        "static/elaina.pc/manis9.jpeg",
        "static/elaina.pc/manis10.jpeg",
        "static/elaina.pc/manis11.jpeg",
        "static/elaina.pc/manis12.jpeg"
        ],
        "static/elaina.pc/manga/manga.jpeg": [
        "static/elaina.pc/manga/manga1.jpeg",
        "static/elaina.pc/manga/manga2.jpeg",
        "static/elaina.pc/manga/manga3.jpeg",
        "static/elaina.pc/manga/manga4.jpeg",
        "static/elaina.pc/manga/manga5.jpeg"
        ]
    };

    // === Deklarasi variabel Modal ===
    var imageModal = document.getElementById("imageModal");
    var fullImage = document.getElementById("fullImage");
    var imageCaption = document.getElementById("imageCaption");
    var closeButton = document.getElementsByClassName("image-close-button")[0];
    var modalLink = document.getElementById("modal-link");
    var relatedImagesContainer = document.querySelector(".related-images-container");

    // === Logika Event Delegation Baru ===
    // Sekarang, kita mendengarkan klik di seluruh dokumen, bukan hanya pada gambar yang ada
    document.addEventListener('click', function(e) {
        var clickedImage = e.target.closest('.thumbnail-gallery img, .gallery-image, .elaina-image, .movie-image, .profile-picture');

        if (clickedImage) {
            e.stopPropagation();
            if (imageModal && fullImage && imageCaption) {
                imageModal.classList.add("show");
                var fullImageUrlFromData = clickedImage.getAttribute('data-full');
                fullImage.src = clickedImage.src;
                imageCaption.innerHTML = clickedImage.alt;
                
                renderRelatedImages(fullImageUrlFromData);

                var destinationLink = clickedImage.getAttribute('data-link');
                if (modalLink && destinationLink) {
                    modalLink.href = destinationLink;
                    modalLink.style.display = 'inline-block';
                } else if (modalLink) {
                    modalLink.style.display = 'none';
                }
            }
        }
    });

    // === Logika untuk Menutup Modal ===
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            if (imageModal) {
                imageModal.classList.remove("show");
            }
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target == imageModal) {
            if (imageModal) {
                imageModal.classList.remove("show");
            }
        }
    });

    // === FUNGSI: Render Gambar Terkait ===
    function renderRelatedImages(mainImageUrl) {
        if (!relatedImagesContainer) return;
        var relatedImages = relatedImagesData[mainImageUrl];
        var html = '';
        if (relatedImages) {
            relatedImages.forEach(function(imageUrl) {
                html += `<img src="${imageUrl}" alt="">`;
            });
        }
        relatedImagesContainer.innerHTML = html;
    }

    // === Event Listener untuk Gambar Terkait ===
    if (relatedImagesContainer) {
        relatedImagesContainer.addEventListener('click', function(event) {
            if (event.target.tagName === 'IMG') {
                document.getElementById("fullImage").src = event.target.src;
            }
        });
    }
});
