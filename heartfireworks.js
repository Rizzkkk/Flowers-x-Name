document.addEventListener('click', (e) => {
    createHeartFireworks(e.pageX, e.pageY);
});

function createHeartFireworks(x, y) {
    const heartFireworks = document.getElementById('heart-fireworks');

    for (let i = 0; i < 30; i++) {  // Adjust number of particles
        const particle = document.createElement('div');
        particle.classList.add('heart-particle');

        // Randomize position and direction of each heart particle
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 100;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
        particle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

        heartFireworks.appendChild(particle);

        // Remove the particle after animation ends
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
}

