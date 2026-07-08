document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('navbar');
    const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
    const revealSelector = '.reveal-left, .reveal-right, .reveal-up, .reveal-down, .reveal-scale, .reveal-rotate, .reveal-flip, .fountain-item';
    const revealElements = document.querySelectorAll(revealSelector);
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    let ticking = false;
    let statsAnimated = false;
    let parallaxData = [];

    function initParallax() {
        parallaxData = Array.from(parallaxElements).map(el => {
            const currentTransform = el.style.transform;
            el.style.transform = 'none';
            const rect = el.getBoundingClientRect();
            const absoluteTop = rect.top + window.scrollY;
            const height = rect.height;
            el.style.transform = currentTransform;

            return {
                el,
                absoluteTop,
                height,
                speed: parseFloat(el.getAttribute('data-parallax-speed'))
            };
        });
    }

    initParallax();
    window.addEventListener('resize', initParallax);

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }

    function update() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        parallaxData.forEach(data => {
            const currentTop = data.absoluteTop - scrollY;
            const currentBottom = currentTop + data.height;

            if (currentBottom > 0 && currentTop < windowHeight) {
                const centerOffset = currentTop - windowHeight / 2;
                const yPos = centerOffset * (1 - data.speed) * 0.6;
                data.el.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });

        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < windowHeight * 0.88) {
                el.classList.add('visible');
            }
        });

        if (!statsAnimated) {
            const statsSection = document.querySelector('.hero-stats');
            if (statsSection) {
                const rect = statsSection.getBoundingClientRect();
                if (rect.top < windowHeight) {
                    animateStats();
                    statsAnimated = true;
                }
            }
        }

        ticking = false;
    }

    function animateStats() {
        statNumbers.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'));
            const duration = 2000;
            const start = performance.now();

            function step(timestamp) {
                const progress = Math.min((timestamp - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target).toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    el.textContent = target.toLocaleString();
                }
            }

            requestAnimationFrame(step);
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.88) {
                el.classList.add('visible');
            }
        });
    }, 200);
});
