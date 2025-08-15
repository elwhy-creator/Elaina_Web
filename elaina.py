from flask import Flask, render_template, request, flash, redirect, url_for, jsonify, send_from_directory
from flask_mail import Mail, Message
import os
import json
import re
elaina = Flask(__name__, static_folder='static', static_url_path='/static')

elaina.config['MAIL_SERVER'] = 'smtp.mail.yahoo.com'
elaina.config['MAIL_PORT'] = 465
elaina.config['MAIL_USE_TLS'] = False
elaina.config['MAIL_USE_SSL'] = True
elaina.config['MAIL_USERNAME'] = 'elaina.chan@yahoo.com'
elaina.config['MAIL_PASSWORD'] = 'ubancxtifxvhpdpk'

mail = Mail(elaina)

# --- FUNGSI UNTUK MENDAPATKAN DETAIL LAGU DARI NAMA FILE ---
def get_song_details(filename):
    name_without_ext = os.path.splitext(filename)[0]
    parts = re.split(r'\s*-\s*', name_without_ext)
    
    title = name_without_ext.replace('-', ' ').title()
    artist = 'Unknown'
    
    if len(parts) >= 2:
        title = parts[1].replace('-', ' ').title()
        artist = parts[0].replace('-', ' ').title()

    title = title.replace('_', ' ').strip()
    artist = artist.replace('_', ' ').strip()
    
    return {'title': title, 'artist': artist}

# --- FUNGSI BARU UNTUK MENDAPATKAN DAFTAR MUSIK DARI FOLDER ---
def get_music_list(sub_directory):
    music_list = []
    full_path = os.path.join(elaina.root_path, 'static', 'music', sub_directory)
    
    if os.path.exists(full_path):
        for filename in os.listdir(full_path):
            if filename.lower().endswith(('.mp3', '.wav', '.ogg')):
                details = get_song_details(filename)
                music_list.append({
                    "src": url_for('static', filename=os.path.join('music', sub_directory, filename)),
                    "title": details['title'],
                    "artist": details['artist'],
                    "poster": url_for('static', filename=os.path.join('images', 'poster', details['title'].replace(' ', '_') + '_poster.jpg'))
                })
    return music_list

# --- MODIFIKASI FUNGSI HOME UNTUK MENGIRIM DUA DAFTAR MUSIK ---
@elaina.route('/')
def home():
    anime_songs = get_music_list('anime-songs')
    mixed_album_songs = get_music_list('mixed-album')
    
    return render_template('home.html', anime_songs=anime_songs, mixed_album_songs=mixed_album_songs)

# ... (sisa kode elaina.py tetap sama) ...
@elaina.route('/anime')
def anime_page():
    return render_template('anime.html')

@elaina.route('/shorts')
def shorts_page():
    return render_template('shorts.html')

@elaina.route('/elaina')
def elaina_page():
    return render_template('elaina.html')

@elaina.route('/gallery')
def gallery_page():
    return render_template('gallery.html')

@elaina.route('/movies')
def movies_page():
    return render_template('movies.html')

@elaina.route('/contact', methods=['GET', 'POST'])
def contact_page():
     if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')

        if not subject:
            subject = "Pesan Tanpa Subject"

        msg = Message(
            subject=f"Pesan Baru: {subject}",
            sender=elaina.config['MAIL_USERNAME'],
            recipients=['elaina.chan@yahoo.com'],  # Ganti dengan email penerima Anda
            body=f"Dari: {name}\nEmail: {email}\n\n{message}"
        )

        try:
            # Mengirim email
            mail.send(msg)
            # Mengarahkan kembali ke halaman kontak setelah sukses
            return redirect(url_for('contact_page'))
        except Exception as e:
            return f"Terjadi kesalahan saat mengirim email: {e}"

     return render_template('contact.html')

@elaina.route('/data/gallery.json')
def gallery_json():
    images = []
    image_directories = ['elaina.pc/elaina01', 'elaina.pc', 'images']

    for directory in image_directories:
        directory_path = os.path.join(elaina.root_path, 'static', directory)
        if not os.path.exists(directory_path):
            continue

        for filename in os.listdir(directory_path):
            if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp')):
                images.append({
                    "src": url_for('static', filename=os.path.join(directory, filename)),
                    "alt": os.path.splitext(filename)[0]
                })
    return jsonify(images)

@elaina.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

@elaina.route('/manga')
def manga_page():
    return render_template('manga.html')

@elaina.route('/douyin')
def douyin_page():
    return render_template('douyin.html')

@elaina.route('/hentai')
def hentai_page():
    return render_template('hentai.html')

@elaina.route('/whitch')
def whitch_page():
    return render_template('whitch.html')

@elaina.route('/picture')
def picture_page():
    return render_template('picture.html')

if __name__ == '__main__':
     elaina.run(host='0.0.0.0', port=5000, debug=True)
