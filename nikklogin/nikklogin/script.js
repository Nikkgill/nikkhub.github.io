// Proposal Page Script
document.addEventListener('DOMContentLoaded', () => {
    const gifts = document.querySelectorAll('.gift-box');
    let opened = false;

    gifts.forEach(gift => {
        gift.addEventListener('click', () => {
            if (!opened) {
                opened = true;
                gift.classList.add('opened');
                
                // Show proposal card after animation
                setTimeout(() => {
                    document.getElementById('proposalCard').style.display = 'block';
                    triggerConfetti();
                }, 1000);
            }
        });
    });
});

function respond(answer) {
    if (answer) {
        alert("Yay! 💍 Let's plan our forever together!");
        triggerConfetti();
    } else {
        alert("I'll keep asking until you say YES! 💖");
    }
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4081', '#ff1493', '#ff69b4']
    });
}