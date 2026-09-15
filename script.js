// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to game cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.game-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Handle explore games button click
document.querySelector('.btn').addEventListener('click', function() {
    const gamesSection = document.getElementById('games');
    gamesSection.scrollIntoView({ behavior: 'smooth' });
});

// Handle learn more buttons
document.querySelectorAll('.btn-small').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const gameCard = this.closest('.game-card');
        const gameName = gameCard.querySelector('h3').textContent;
        alert(`You clicked on: ${gameName}\n\nCheck back soon for more details!`);
    });
});

// Handle contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formInputs = this.querySelectorAll('input, textarea');
    const isValid = Array.from(formInputs).every(input => input.value.trim() !== '');
    
    if (isValid) {
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Add scroll animation to navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

console.log('Gaming Website Loaded! 🎮');
