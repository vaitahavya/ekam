/**
 * Decade Street Ekam — Full-Page Brochure
 */

(function () {
    'use strict';

    const sections = document.querySelectorAll('.fp-section');
    const dots = document.querySelectorAll('.fp-dot');
    const navLinks = document.querySelectorAll('.header-nav a');
    const headerToggle = document.querySelector('.header-toggle');
    const headerNav = document.querySelector('.header-nav');

    const sectionIds = [
        'hero', 'concept', 'idea', 'overview', 'pricing', 'quality',
        'revenue', 'income', 'exit', 'legal', 'audience', 'summary', 'faq', 'close'
    ];

    function getVisibleSection() {
        const vh = window.innerHeight;
        const scrollTop = window.scrollY;
        const threshold = vh * 0.5;

        for (let i = 0; i < sections.length; i++) {
            const rect = sections[i].getBoundingClientRect();
            if (rect.top <= threshold && rect.bottom > vh * 0.3) {
                return i + 1;
            }
        }
        return 1;
    }

    function setActiveDot(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i + 1 === index);
        });
    }

    function scrollToSection(index) {
        const target = sections[index - 1];
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Scroll spy
    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => setActiveDot(getVisibleSection()));
    });

    setActiveDot(1);

    // Dot clicks
    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            const idx = parseInt(dot.dataset.index, 10);
            scrollToSection(idx);
        });
    });

    // Nav links
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const id = href.slice(1);
                const target = document.getElementById(id);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    if (headerNav.classList.contains('open')) {
                        headerNav.classList.remove('open');
                    }
                }
            }
        });
    });

    // Hero scroll hint
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', (e) => {
            e.preventDefault();
            const concept = document.getElementById('concept');
            if (concept) concept.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // Mobile menu
    if (headerToggle && headerNav) {
        headerToggle.addEventListener('click', () => {
            headerNav.classList.toggle('open');
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const current = getVisibleSection();
        if (e.key === 'ArrowDown' && current < sections.length) {
            e.preventDefault();
            scrollToSection(current + 1);
        } else if (e.key === 'ArrowUp' && current > 1) {
            e.preventDefault();
            scrollToSection(current - 1);
        }
    });
})();
