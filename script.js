document.addEventListener('mousemove', function(e) {
    const bubble = document.getElementById('bubble');
    if (bubble) {
        bubble.style.left = e.clientX + 'px';
        bubble.style.top = e.clientY + 'px';
    } else {
        console.error('Bubble element not found');
    }
});

