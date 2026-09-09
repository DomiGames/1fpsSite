// ----- LIGHTBOX (game page screenshots) -----
// Safe on any page: only binds when the lightbox markup exists.
(function () {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');

    function open(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || 'Screenshot';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    }

    document.querySelectorAll('.shot-frame img').forEach((img) => {
        img.addEventListener('click', () => open(img.src, img.alt));
    });

    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) close();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) close();
    });
})();
