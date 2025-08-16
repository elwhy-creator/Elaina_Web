// search.js

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // Tambahkan event listener untuk mendengarkan ketikan pengguna
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        searchResults.innerHTML = ''; // Kosongkan hasil sebelumnya

        if (query.length > 0) {
            searchAllContent(query);
        }
    });

    // Fungsi utama untuk mencari semua konten
    function searchAllContent(query) {
        // --- Bagian 1: Mencari Lagu ---
        // Asumsikan songs.json ada di 'static/songs.json'
        fetch('static/songs.json')
            .then(response => response.json())
            .then(data => {
                const allSongs = [...data.anime_songs, ...data.mixed_album_songs];
                allSongs.forEach(song => {
                    if (song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query)) {
                        const resultItem = document.createElement('a');
                        resultItem.href = 'index.html'; // Anda bisa arahkan ke halaman lagu
                        resultItem.innerHTML = `Lagu: ${song.title} - ${song.artist}`;
                        searchResults.appendChild(resultItem);
                    }
                });
            });

        // --- Bagian 2: Mencari Gambar ---
        // Perbaikan: Mencari di src atau category
        const allImages = [
            // Ganti ini dengan data gambar Anda yang sebenarnya
            { src: "static/elaina.pc/kawai3.jpg", category: "Kategori Cute" },
            { src: "static/elaina.pc/casual47.jpeg", category: "Kategori Casual" }
        ];

        allImages.forEach(image => {
            if (image.src.toLowerCase().includes(query) || image.category.toLowerCase().includes(query)) {
                const resultItem = document.createElement('a');
                resultItem.href = 'gallery.html'; // Anda bisa arahkan ke halaman galeri
                resultItem.innerHTML = `Gambar: ${image.category}`;
                searchResults.appendChild(resultItem);
            }
        });

        // --- Bagian 3: Mencari Video (BARU) ---
        // Asumsikan data video Anda ada di file JSON terpisah atau di variabel
        const allVideos = [
            // Ganti ini dengan data video Anda yang sebenarnya
            { src: "path/to/video1.mp4", category: "Anime" },
            { src: "path/to/video2.mp4", category: "Manga" }
        ];
        
        allVideos.forEach(video => {
            if (video.src.toLowerCase().includes(query) || video.category.toLowerCase().includes(query)) {
                const resultItem = document.createElement('a');
                resultItem.href = 'elaina.html'; // Anda bisa arahkan ke halaman video
                resultItem.innerHTML = `Video: ${video.category}`;
                searchResults.appendChild(resultItem);
            }
        });
    }
});
