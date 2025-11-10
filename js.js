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

    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.replace('fa-times', 'fa-bars');
    });
});



<!--========== Scroll to Top Script  ==========-->

document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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



