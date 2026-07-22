// ----- HOVER ZOOM PREVIEW -----
const preview = document.getElementById('hoverPreview');
let hoverTimeout;

document.querySelectorAll('.game-gallery img, .game-gallery-full img').forEach(img => {
    img.addEventListener('mouseenter', function(e) {
        preview.style.display = '';
        preview.src = this.src;
        preview.alt = this.alt || 'Game preview';
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
            preview.classList.add('visible');
        }, 50);
    });

    img.addEventListener('mousemove', function(e) {
        preview.style.left = e.clientX + 'px';
        preview.style.top = e.clientY + 'px';
    });

    img.addEventListener('mouseleave', function() {
        clearTimeout(hoverTimeout);
        preview.classList.remove('visible');
        setTimeout(() => {
            if (!preview.classList.contains('visible')) {
                preview.style.display = 'none';
            }
        }, 100);
    });
});

// ----- LIGHTBOX (click) -----
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('lightboxClose');

document.querySelectorAll('.game-gallery img, .game-gallery-full img').forEach(img => {
    img.addEventListener('click', function(e) {
        e.stopPropagation();
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt || 'Game screenshot';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        preview.classList.remove('visible');
    });
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});
