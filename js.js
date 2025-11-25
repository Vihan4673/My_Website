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


// projects section







// Project Filter Functionality
// ===================== Project Filter + See More =====================
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.querySelector('.projects-grid');

    // Add See More button container
    const seeMoreButtonContainer = document.createElement('div');
    seeMoreButtonContainer.className = 'see-more-container';
    seeMoreButtonContainer.innerHTML = `
        <button id="seeMoreButton" class="see-more-button">
            See More <i class="fas fa-chevron-down"></i>
        </button>
    `;
    projectsGrid.parentNode.insertBefore(seeMoreButtonContainer, projectsGrid.nextSibling);

    const seeMoreButton = document.getElementById('seeMoreButton');

    const initialLimit = 3;
    let currentLimit = initialLimit;
    let currentFilter = 'all';
    let expandedView = false;

    function updateProjectVisibility() {
        let visibleCount = 0;

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const matchesFilter = currentFilter === 'all' || category === currentFilter;

            if (matchesFilter) {
                visibleCount++;
                if (visibleCount <= currentLimit || expandedView) {
                    card.style.display = 'block';
                    card.classList.add('visible'); // optional animation class
                } else {
                    card.style.display = 'none';
                    card.classList.remove('visible');
                }
            } else {
                card.style.display = 'none';
                card.classList.remove('visible');
            }
        });

        // Update See More button
        const totalForFilter = Array.from(projectCards).filter(card => {
            const category = card.getAttribute('data-category');
            return currentFilter === 'all' || category === currentFilter;
        }).length;

        if (totalForFilter <= initialLimit) {
            seeMoreButton.style.display = 'none';
        } else {
            seeMoreButton.style.display = 'block';
            seeMoreButton.innerHTML = expandedView ? 'See Less <i class="fas fa-chevron-up"></i>' : 'See More <i class="fas fa-chevron-down"></i>';
        }
    }

    // Filter button click
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentFilter = button.getAttribute('data-filter');
            expandedView = false;
            currentLimit = initialLimit;
            updateProjectVisibility();
        });
    });

    // See More click
    seeMoreButton.addEventListener('click', () => {
        expandedView = !expandedView;
        updateProjectVisibility();
    });

    // Initialize
    updateProjectVisibility();

    // Optional: IntersectionObserver for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => observer.observe(card));
});





<!-- ========================================= Email =================================== -->
emailjs.init("6f474799-fa6d-4180-869f-6299f864f8bf");

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(() => {
            alert("Message sent successfully to vihanvimen46@gmail.com!");
            this.reset();
        }, (err) => {
            alert("Failed to send message: " + JSON.stringify(err));
        });
});















    window.onload = function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("pageContent").style.display = "block";
};

