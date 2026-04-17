// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;

    cursor.style.opacity = '1';
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
});

function animateFollower() {
    requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, .project-card, .skill-tag, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Animate skill tags
document.querySelectorAll('.skill-tag').forEach((tag, index) => {
    tag.style.animation = `fadeIn 0.5s ease forwards`;
    tag.style.animationDelay = `${index * 0.05}s`;
    tag.style.opacity = '0';
});

// Typing effect for hero text
const heroText = document.querySelector('.hero p');
const text = heroText.textContent;
heroText.textContent = '';
let i = 0;

setTimeout(() => {
    const typeWriter = () => {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    typeWriter();
}, 1500);