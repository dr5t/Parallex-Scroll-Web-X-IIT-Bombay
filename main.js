document.addEventListener('DOMContentLoaded', () => {
    const layers = document.querySelectorAll('.layer');
    const cards = document.querySelectorAll('.card');
    
    let scrollY = window.scrollY;
    let ticking = false;


    let currentY = 0;
    let targetY = 0;
    const ease = 0.1;


    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        setInterval(() => {
            glitchText.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            setTimeout(() => {
                glitchText.style.transform = 'translate(0, 0)';
            }, 50);
        }, 2000);
    }

    function onScroll() {
        targetY = window.scrollY;
        requestTick();
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }

    function update() {

        currentY += (targetY - currentY) * ease;
        

        layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed'));

            

            

            const yPos = -(currentY * speed);
            layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        });


        cards.forEach(card => {
            const speed = parseFloat(card.getAttribute('data-speed')) || 1;

            const rect = card.getBoundingClientRect();

            if (rect.top < window.innerHeight && rect.bottom > 0) {

                const centerOffset = (rect.top + rect.height / 2) - (window.innerHeight / 2);
                const yPos = centerOffset * (1 - speed) * 0.5;
                card.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
            }
        });


        if (Math.abs(targetY - currentY) > 0.1) {
            requestAnimationFrame(update);
        } else {
            ticking = false;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    

    onScroll();
});
