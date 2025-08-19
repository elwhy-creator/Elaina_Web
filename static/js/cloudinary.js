document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const uploadButton = document.getElementById('upload-button');
    const statusText = document.getElementById('status-unggah');
    
    uploadButton.addEventListener('click', () => {
        const file = fileInput.files[0];
        
        if (!file) {
            statusText.textContent = 'Pilih file terlebih dahulu.';
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'YOUR_UPLOAD_PRESET_NAME'); // Ganti dengan upload preset Anda

        statusText.textContent = 'Mengunggah...';

        fetch('https://api.cloudinary.com/v1_1/Hontoni_Sugoi/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.secure_url) {
                statusText.innerHTML = `Unggah berhasil! URL: <a href="${data.secure_url}" target="_blank">${data.secure_url}</a>`;
            } else {
                statusText.textContent = 'Unggah gagal. Periksa Cloudinary API Anda.';
                console.error('Unggah Cloudinary Gagal:', data);
            }
        })
        .catch(error => {
            statusText.textContent = 'Terjadi kesalahan jaringan.';
            console.error('Kesalahan:', error);
        });
    });
});
