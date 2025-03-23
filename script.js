document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-scroll-container img');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popupTitle');
    const popupText = document.getElementById('popupText');
    const closeBtn = document.getElementById('closePopup');

    // Open popup on image click
    images.forEach(img => {
        img.addEventListener('click', () => {
            popupTitle.textContent = img.dataset.title;
            popupText.textContent = img.dataset.text;
            popup.classList.remove('hidden');
        });
    });

    // Close popup
    closeBtn.addEventListener('click', () => popup.classList.add('hidden'));
    popup.addEventListener('click', (e) => {
        if (e.target === popup) popup.classList.add('hidden');
    });
});