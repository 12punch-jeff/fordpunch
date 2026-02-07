// Fun sparkle effects for Ford's World
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelector('.stars');
    
    // Create floating stars
    for (let i = 0; i < 50; i++) {
        createStar();
    }
    
    function createStar() {
        const star = document.createElement('div');
        star.innerHTML = ['⭐', '✨', '🌟', '💫'][Math.floor(Math.random() * 4)];
        star.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 10}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        stars.appendChild(star);
    }
    
    // Add float animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Click sparkle effect
    document.addEventListener('click', (e) => {
        for (let i = 0; i < 5; i++) {
            createSparkle(e.clientX, e.clientY);
        }
    });
    
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = ['✨', '⭐', '💫'][Math.floor(Math.random() * 3)];
        sparkle.style.cssText = `
            position: fixed;
            font-size: 20px;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 1000;
            animation: sparkle 1s ease-out forwards;
        `;
        document.body.appendChild(sparkle);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        sparkle.animate([
            { transform: 'scale(1) translate(0, 0)', opacity: 1 },
            { transform: `scale(0) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, opacity: 0 }
        ], { duration: 1000, easing: 'ease-out' });
        
        setTimeout(() => sparkle.remove(), 1000);
    }
});
