// Handle image upload
const uploadArea = document.getElementById('upload-area');
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*';

fileInput.onchange = function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                // Resize or position the image as needed
                uploadArea.style.backgroundImage = `url(${e.target.result})`;
                uploadArea.style.backgroundSize = 'cover';
                uploadArea.style.border = 'none'; // Remove dashed border after upload
                uploadArea.querySelector('p').style.display = 'none'; // Hide text after upload
            };
        };
        reader.readAsDataURL(file);
    }
};

uploadArea.addEventListener('click', () => fileInput.click());

// Optional: Limit text in text-area (e.g., max 50 characters)
const textArea = document.getElementById('text-area');
textArea.addEventListener('input', function() {
    if (this.textContent.length > 50) {
        this.textContent = this.textContent.substring(0, 50);
    }
});