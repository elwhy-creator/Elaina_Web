// Dapatkan data dari file JSON
fetch('songs.json')
  .then(response => response.json())
  .then(data => {
    // Ambil daftar lagu anime
    const animeSongs = data.anime_songs;
    const songList = document.getElementById('playlist1'); // Asumsikan Anda memiliki elemen ini di HTML

    // Loop melalui setiap lagu anime
    animeSongs.forEach(song => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="${song.poster}" class="song-thumbnail" alt="Poster">
        <div class="song-info">
            <p class="song-title">${song.title}</p>
            <p class="song-artist">${song.artist}</p>
        </div>
        <audio class="song" controls preload="none">
            <source src="${song.src}" type="audio/mpeg">
        </audio>
      `;
      songList.appendChild(listItem);
    });

    // Lakukan hal yang sama untuk mixed album
    const mixedSongs = data.mixed_album_songs;
    const songList = document.getElementById('playlist2'); // Asumsikan Anda memiliki elemen ini

    mixedSongs.forEach(song => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="${song.poster}" class="song-thumbnail" alt="Poster">
        <div class="song-info">
            <p class="song-title">${song.title}</p>
            <p class="song-artist">${song.artist}</p>
        </div>
        <audio class="song" controls preload="none">
            <source src="${song.src}" type="audio/mpeg">
        </audio>
      `;
      songList.appendChild(listItem);
    });
  });
