const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Smooth scrolling for navbar links
navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add glowing effect on hover for interactive elements
const navbarLinks = document.querySelectorAll('#navbar a');
const projectCards = document.querySelectorAll('.project-card');

navbarLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('glow');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('glow');
    });
});

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('glow');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('glow');
    });
});

const canvas = document.getElementById('plasmaCanvas');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

let mouse = { x: width/2, y: height/2 };
window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Generate plasma effect with burgundy tones
function drawPlasma() {
    let image = ctx.createImageData(width, height);
    let data = image.data;

    for (let y=0; y<height; y++) {
        for (let x=0; x<width; x++) {
            let i = (y*width + x)*4;
            let r = Math.floor(128 + 128 * Math.sin((x+mouse.x)/50));
            let g = Math.floor(20 + 50 * Math.sin((y+mouse.y)/50));
            let b = Math.floor(50 + 50 * Math.sin((x+y)/50));
            data[i] = r;     // Red
            data[i+1] = g;   // Green
            data[i+2] = b;   // Blue
            data[i+3] = 150; // Alpha for more prominent effect
        }
    }
    ctx.putImageData(image,0,0);
    requestAnimationFrame(drawPlasma);
}

drawPlasma();
