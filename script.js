document.addEventListener('mousemove', function(e) {
    const bubble = document.getElementById('bubble');
    bubble.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
