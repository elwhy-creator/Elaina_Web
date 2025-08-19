const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'static', 'images', 'poster');
const outputFile = path.join(__dirname, 'static', 'data', 'images.json');

fs.readdir(imageDir, (err, files) => {
    if (err) {
        console.error('Gagal membaca direktori gambar:', err);
        return;
    }

    const imageList = files
        .filter(file => file.endsWith('.jpg') || file.endsWith('.png'))
        .map(file => {
            return {
                src: `static/images/poster/${file}`,
                caption: file.split('_')[0] // Contoh sederhana untuk caption
            };
        });

    const jsonData = JSON.stringify({ images: imageList }, null, 2);

    fs.writeFile(outputFile, jsonData, err => {
        if (err) {
            console.error('Gagal menulis file JSON:', err);
            return;
        }
        console.log('File JSON gambar berhasil diperbarui!');
    });
});

