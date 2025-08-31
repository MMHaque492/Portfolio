document.addEventListener('DOMContentLoaded', () => {

    // --- Sticky Navbar ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Hamburger Menu for Mobile ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // --- Typing Text Animation ---
    const typingText = document.querySelector('.typing-text');
    const professions = ["Full Stack Developer", "AI Specialist", "Co-founder of Haque Design"];
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentProfession = professions[professionIndex];
        if (isDeleting) {
            typingText.textContent = currentProfession.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentProfession.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentProfession.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
        }

        const typingSpeed = isDeleting ? 100 : 150;
        setTimeout(type, typingSpeed);
    }
    type();


    // --- Scroll-triggered Animations ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once it's revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });


    // --- Contact Form Handling (Basic Validation) ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would handle form submission here,
        // e.g., using fetch() to send data to a server or a service like Formspree.
        alert('Thank you for your message! This is a demo form.');
        contactForm.reset();
    });

});