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
const wrapper = document.querySelector('.projects-wrapper');
const projects = document.querySelectorAll('.project-box');
const dotsContainer = document.querySelector('.scroll-dots');

projects.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if(index === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
        wrapper.scrollLeft = projects[index].offsetLeft - wrapper.offsetLeft;
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.scroll-dots .dot');

wrapper.addEventListener('scroll', () => {
    const scrollCenter = wrapper.scrollLeft + wrapper.offsetWidth / 2;
    projects.forEach((project, idx) => {
        const projectCenter = project.offsetLeft + project.offsetWidth / 2;
        if(Math.abs(scrollCenter - projectCenter) < project.offsetWidth / 2){
            dots.forEach(d => d.classList.remove('active'));
            dots[idx].classList.add('active');
        }
    });
});



<!-- ========================================= Email =================================== -->
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
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
