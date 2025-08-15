import os
import json

def create_gallery_json(base_folder, json_file_name):
    output_path = os.path.join(os.getcwd(), 'static', json_file_name)
    full_base_path = os.path.join(os.getcwd(), base_folder)
    
    gallery_data = []
    image_id = 1
    
    print(f"Mulai membaca file dari folder: {full_base_path}")
    
    for root, dirs, files in os.walk(full_base_path):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp')):
                full_image_path = os.path.join(root, file)
                relative_path = os.path.relpath(full_image_path, os.getcwd())
                
                category_name = os.path.basename(root)
                
                item = {
                    "id": image_id,
                    "src": f"/{relative_path.replace(os.sep, '/')}",
                    "alt": os.path.splitext(file)[0].replace('_', ' ').title(),
                    "category": category_name,
                    "link": f"#{category_name}"
                }
                gallery_data.append(item)
                image_id += 1

    with open(output_path, 'w') as f:
        json.dump(gallery_data, f, indent=4)
        
    print(f"Berhasil membuat {len(gallery_data)} item di '{json_file_name}'.")

# --- Bagian yang perlu kamu ubah ---
image_folder = 'static'
my_json_file = 'gallery.json' 

create_gallery_json(image_folder, my_json_file)
