document.addEventListener('DOMContentLoaded', (event) => {
    // Daftar URL gambar dari galeri kamu
    const galleryImages = [
	    "/static/images/Elaina.jpeg",
	    "/static/elaina.pc/scholmode.jpeg",
	    "/static/elaina.pc/sakura2.jpeg",
	    "/static/elaina.pc/manis7.jpeg",
	    "/static/images/KakoiJanai.jpg",
	    "/static/elaina.pc/sexy4.jpg",
	    "/static/images/sayaelaina.jpg",
	    "/static/images/dragon.jpg",
	    "/static/images/elaina.wp.jpg",
	    "/static/images/Bg_js1.jpeg",
	    "/static/elaina.pc/sakura1.jpeg",
	    "/static/images/anime-eyes.png",
	    "/static/images/imouto7.png",
	    "/static/images/elaina.wp1.jpg",
	    "/static/images/elaina.wp2.jpg",
	    "/static/images/elaina.wp3.jpg",
	    "/static/images/Elaina (1).jpeg",
	    "/static/images/Elaina (2).jpeg",
	    "/static/images/Elaina (3).jpeg"
       // Tambahkan semua URL gambar lain di sini
    ];

    // Daftar nama-nama container yang ingin kamu ubah background-nya
    const containerNames = ['home', 'body'];

    function setRandomBackground() {
        const randomIndex = Math.floor(Math.random() * galleryImages.length);
        const randomImage = galleryImages[randomIndex];
        
        // Terapkan background ke body
        document.body.style.backgroundImage = `url('${randomImage}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundRepeat = 'no-repeat';

        // Terapkan background yang sama ke setiap container yang kamu sebutkan
        containerNames.forEach(containerId => {
            const container = document.getElementById(containerId);
            if (container) {
                container.style.backgroundImage = `url('${randomImage}')`;
                container.style.backgroundSize = 'cover';
                container.style.backgroundPosition = 'center';
                container.style.backgroundAttachment = 'fixed';
                container.style.backgroundRepeat = 'no-repeat';
            }
        });
    }

    // Panggil fungsi saat halaman pertama kali dimuat
    setRandomBackground();

    const changeBgButton = document.getElementById('change-bg-button');
    if (changeBgButton) {
        changeBgButton.addEventListener('click', setRandomBackground);
    }
});
