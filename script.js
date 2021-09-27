import random from './random.min.js';

function stars() {
    const img = document.createElement('img');
    const hero = $('.hero');
    const x = random({
        min: 50,
        max: hero.width()-50,
        integer: true
    });
    const y = random({
        min: 100,
        max: hero.height()-100,
        integer: true
    });

    const h = random({
        min: 30,
        max: 80,
        integer: true
    });

    img.src = './assets/SVG/star.svg';
    img.className = 'stars';
    img.height = h;
    img.style.left = `${x}px`;
    img.style.top  = `${y}px`;

    hero.append(img);
}

function genStars(count) {
    
    for(let i = 0; i < count; i++) {
        stars();
    }
}

genStars(10);