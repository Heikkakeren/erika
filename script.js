let currentPage = 1;
let isPlaying = false;
let audio = null;

// Initialize audio when page loads
document.addEventListener('DOMContentLoaded', function() {
    audio = document.getElementById('backgroundMusic');
    
    // Set volume to a comfortable level
    if (audio) {
        audio.volume = 0.5;
        
        // Handle audio loading errors
        audio.addEventListener('error', function() {
            console.log('Audio file not found. Please add love.mp3 to your project directory.');
        });
        
        // Update button when audio ends (if not looping)
        audio.addEventListener('ended', function() {
            if (!audio.loop) {
                isPlaying = false;
                updatePlayButton();
            }
        });
    }
    
    // Ensure page 1 is visible initially
    document.getElementById('page1').classList.add('active');
    
    // Add some random animation delays to floating balloons
    const balloons = document.querySelectorAll('.floating-balloon');
    balloons.forEach((balloon, index) => {
        balloon.style.animationDelay = (Math.random() * 3) + 's';
        balloon.style.animationDuration = (4 + Math.random() * 2) + 's';
    });
    
    // Add random delays to sparkles
    const sparkles = document.querySelectorAll('.sparkle');
    sparkles.forEach((sparkle, index) => {
        sparkle.style.animationDelay = (Math.random() * 3) + 's';
    });
    
    // Console welcome message
    console.log('🎉 Happy Birthday Website Loaded! 🎂');
    console.log('Use arrow keys or swipe to navigate between pages');
    console.log('Add love.mp3 file to enable background music');
});

// Page Navigation Functions
function nextPage() {
    if (currentPage === 1) {
        const page1 = document.getElementById('page1');
        const page2 = document.getElementById('page2');
        
        // Add transition classes
        page1.classList.add('slide-out-left');
        page2.classList.add('active');
        
        // Clean up classes after animation
        setTimeout(() => {
            page1.classList.remove('active', 'slide-out-left');
        }, 800);
        
        currentPage = 2;
        
        // Trigger animations for page 2
        setTimeout(() => {
            triggerPage2Animations();
        }, 400);
    }
}

function prevPage() {
    if (currentPage === 2) {
        const page1 = document.getElementById('page1');
        const page2 = document.getElementById('page2');
        
        // Add transition classes
        page2.classList.remove('active');
        page1.classList.add('active');
        
        currentPage = 1;
        
        // Trigger animations for page 1
        setTimeout(() => {
            triggerPage1Animations();
        }, 400);
    }
}

// Animation Triggers
function triggerPage1Animations() {
    const elements = document.querySelectorAll('#page1 .fade-in, #page1 .fade-in-delayed, #page1 .fade-in-slow, #page1 .fade-in-final');
    elements.forEach((el, index) => {
        el.style.animation = 'none';
        setTimeout(() => {
            el.style.animation = '';
        }, 50);
    });
}

function triggerPage2Animations() {
    const elements = document.querySelectorAll('#page2 .fade-in, #page2 .fade-in-delayed, #page2 .fade-in-slow, #page2 .fade-in-final');
    elements.forEach((el, index) => {
        el.style.animation = 'none';
        setTimeout(() => {
            el.style.animation = '';
        }, 50);
    });
}

// Music Player Functions
function toggleMusic() {
    if (!audio) {
        console.log('Audio not available');
        return;
    }
    
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        audio.play().then(() => {
            console.log('Playing "Love" by Wave to Earth');
            updatePlayButton();
        }).catch((error) => {
            console.log('Could not play audio:', error);
            isPlaying = false;
            updatePlayButton();
        });
    } else {
        audio.pause();
        console.log('Pausing music');
        updatePlayButton();
    }
}

function updatePlayButton() {
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const playText = document.getElementById('playText');
    
    if (isPlaying) {
        playBtn.classList.add('playing');
        playIcon.textContent = '⏸️';
        playText.textContent = 'Pause';
    } else {
        playBtn.classList.remove('playing');
        playIcon.textContent = '▶️';
        playText.textContent = 'Play';
    }
    
    // Add visual feedback
    playBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        playBtn.style.transform = 'scale(1)';
    }, 150);
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        if (currentPage === 1) {
            nextPage();
        }
    } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (currentPage === 2) {
            prevPage();
        }
    }
});

// Touch/Swipe Support for Mobile
let startX = 0;
let endX = 0;

document.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
});

document.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const threshold = 50; // Minimum distance for swipe
    const difference = startX - endX;
    
    if (Math.abs(difference) > threshold) {
        if (difference > 0 && currentPage === 1) {
            // Swipe left (next page)
            nextPage();
        } else if (difference < 0 && currentPage === 2) {
            // Swipe right (previous page)
            prevPage();
        }
    }
}

// Easter egg - konami code for extra effects
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', function(event) {
    konamiCode.push(event.key);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Add extra sparkles and effects
    const body = document.body;
    body.style.animation = 'rainbow 2s linear infinite';
    
    // Create extra floating hearts
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100vh';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'floatUp 3s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
    
    console.log('🎉 Easter egg activated! 🌈');
    
    setTimeout(() => {
        body.style.animation = '';
    }, 2000);
}

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
