// Dapatkan data dari file JSON
fetch('static/songs.json')
  .then(response => response.json())
  .then(data => {

    // Ambil daftar lagu anime
    const animeSongs = data.anime_songs;
    const animeSongList = document.getElementById('playlist1');

    // elemen HTML untuk setiap lagu anime
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

    // elemen HTML untuk mixed album
    const mixedSongs = data.mixed_album_songs;
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

    // === FUNGSI PLAYLIST DAN LAGU ===
    var songs = document.getElementsByClassName('song');

    for (var i = 0; i < songs.length; i++) {
        songs[i].addEventListener('ended', function() {
            var currentSongIndex = -1;
            for (var j = 0; j < songs.length; j++) {
                if (songs[j] === this) {
                    currentSongIndex = j;
                    break;
                }
            }
            var nextSongIndex = currentSongIndex + 1;
            if (nextSongIndex < songs.length) {
                songs[nextSongIndex].play();
            } else {
                songs[0].play();
            }
        });
    }

  });

function toggleSongs(playlistID) {
    var playlist = document.getElementById(playlistID);
    if (playlist.style.display === "block") {
        playlist.style.display = "none";
    } else {
        playlist.style.display = "block";
    }
}
