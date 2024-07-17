document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('mousemove', function(e) {
    const bubble = document.getElementById('bubble');
    if (bubble) {
        bubble.style.left = e.clientX + 'px';
        bubble.style.top = e.clientY + 'px';
    } else {
        console.error('Bubble element not found');
    }
});
