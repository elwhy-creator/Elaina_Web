// Dapatkan data dari file JSON
fetch('static/songs.json')
  .then(response => response.json())
  .then(data => {
    // Ambil daftar lagu anime
    const animeSongs = data.anime_songs;
    // Gunakan nama variabel yang berbeda di sini
    const animeSongList = document.getElementById('playlist1');

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
      animeSongList.appendChild(listItem);
    });

    // Lakukan hal yang sama untuk mixed album
    const mixedSongs = data.mixed_album_songs;
    // Gunakan nama variabel yang berbeda di sini juga
    const mixedSongList = document.getElementById('playlist2');

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
      mixedSongList.appendChild(listItem);
    });
  });
