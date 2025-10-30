// ===================== Typing Effect =====================
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('.typing', {
        strings: [
            "Software Engineer",
            "Content Creator",
            "Video Editor",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// ===================== Navbar Toggle =====================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');

    // Toggle between bars and close icon
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
});

// Close menu when clicking a link (mobile UX)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.replace('fa-times', 'fa-bars');
    });
});

// ===================== Scroll Animation =====================
document.addEventListener("DOMContentLoaded", () => {
    const autoShowElements = document.querySelectorAll('.autoShow');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.3 });

    autoShowElements.forEach(el => observer.observe(el));
});

// ===================== Gallery Section =====================
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.gallery-container');
    const dotsContainer = document.getElementById('galleryDots');
    const galleryBoxes = document.querySelectorAll('.gallery-box');

    if (!container || !dotsContainer || galleryBoxes.length === 0) return;

    let activeIndex = 0;
    const totalImages = galleryBoxes.length;

    // --- Update Active Image & Dots ---
    const updateActiveState = (index) => {
        activeIndex = index;
        galleryBoxes.forEach(box => box.classList.remove('center', 'adjacent'));
        galleryBoxes[activeIndex].classList.add('center');

        const dots = document.querySelectorAll('.pagination-dot');
        if (dots.length > 0) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[activeIndex].classList.add('active');
        }
    };

    const centerElement = (element, index) => {
        element.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });
        updateActiveState(index);
    };

    // --- Keyboard Navigation ---
    document.addEventListener('keydown', (e) => {
        let newIndex = activeIndex;

        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
        }

        if (e.key === 'ArrowRight') {
            newIndex = Math.min(activeIndex + 1, totalImages - 1);
        } else if (e.key === 'ArrowLeft') {
            newIndex = Math.max(activeIndex - 1, 0);
        }

        if (newIndex !== activeIndex) {
            centerElement(galleryBoxes[newIndex], newIndex);
        }
    });

    // --- Mouse Drag Scroll ---
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('is-dragging');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    const stopDragging = () => {
        isDown = false;
        container.classList.remove('is-dragging');
    }

    container.addEventListener('mouseleave', stopDragging);
    container.addEventListener('mouseup', stopDragging);

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const distanceMoved = (x - startX);
        const walk = distanceMoved * 1.5;
        container.scrollLeft = scrollLeft - walk;
    });

    // --- Dot Generation & Click Events ---
    galleryBoxes.forEach((box, index) => {
        const dot = document.createElement('div');
        dot.classList.add('pagination-dot');
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);

        dot.addEventListener('click', () => {
            centerElement(box, index);
        });

        box.addEventListener('click', (e) => {
            e.preventDefault();
            centerElement(box, index);
        });
    });

    // --- Intersection Observer for Active Image ---
    const observerOptions = {
        root: container,
        rootMargin: '0px',
        threshold: 0.7
    };

    let observerTimeout = null;

    const observer = new IntersectionObserver((entries) => {
        let newCenterIndex = -1;

        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
                const index = Array.from(galleryBoxes).indexOf(entry.target);
                if (newCenterIndex === -1 || entry.intersectionRatio > entries[newCenterIndex]?.intersectionRatio) {
                    newCenterIndex = index;
                }
            }
        });

        if (newCenterIndex !== -1 && newCenterIndex !== activeIndex) {
            clearTimeout(observerTimeout);
            observerTimeout = setTimeout(() => {
                updateActiveState(newCenterIndex);
            }, 150);
        }
    }, observerOptions);

    galleryBoxes.forEach(box => observer.observe(box));

    // --- Initialize Gallery WITHOUT auto-scroll ---
    const initializeGallery = () => {
        if (galleryBoxes.length > 0) {
            // ❌ Removed scrollIntoView to stop auto-scroll
            updateActiveState(0);
        }
    };

    setTimeout(initializeGallery, 100);
});
