document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const images = document.querySelectorAll('.gallery-image');
    const topLink = document.querySelector('.navbar a[href="#top"]');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            cursor.classList.add('on-image');
        });
        image.addEventListener('mouseleave', () => {
            cursor.classList.remove('on-image');
        });
    });

    topLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
    });
});