import os

# Folder containing your images
image_folder = "fre_img"

# Get all files in the folder
image_files = os.listdir(image_folder)

# Filter for image files only
image_files = [f for f in image_files if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif'))]

# Generate HTML
with open("image_tags.html", "w", encoding="utf-8") as output:
    for file in image_files:
        output.write(f'<img class = "auto-crop" src="{image_folder}/{file}" alt="frehiwet" class="viewerVolume()">\n')

print("✅ HTML image tags saved in 'image_tags.html'")