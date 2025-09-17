class ColorMatchGame {
    constructor() {
        this.timeLeft = 300; // 5 minutes in seconds
        this.score = 0;
        this.gameRunning = false;
        this.timer = null;
        this.currentTargetColor = null;
        this.correctIndex = 0;
        
        this.colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
            '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
            '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2',
            '#F9E79F', '#ABEBC6', '#FAD7A0', '#AED6F1', '#D5A6BD'
        ];
        
        this.initializeElements();
        this.bindEvents();
    }
    
    initializeElements() {
        this.timeDisplay = document.getElementById('time');
        this.scoreDisplay = document.getElementById('score');
        this.targetColorDisplay = document.getElementById('targetColor');
        this.colorOptions = document.querySelectorAll('.color-option');
        this.startBtn = document.getElementById('startBtn');
        this.restartBtn = document.getElementById('restartBtn');
        this.gameOverScreen = document.getElementById('gameOver');
        this.finalScoreDisplay = document.getElementById('finalScore');
        this.playAgainBtn = document.getElementById('playAgainBtn');
    }
    
    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.restartBtn.addEventListener('click', () => this.restartGame());
        this.playAgainBtn.addEventListener('click', () => this.restartGame());
        
        this.colorOptions.forEach(option => {
            option.addEventListener('click', (e) => this.handleColorClick(e));
        });
    }
    
    startGame() {
        this.gameRunning = true;
        this.startBtn.style.display = 'none';
        this.restartBtn.style.display = 'inline-block';
        this.gameOverScreen.style.display = 'none';
        
        this.startTimer();
        this.generateNewRound();
    }
    
    startTimer() {
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimeDisplay();
            
            if (this.timeLeft <= 0) {
                this.endGame();
            }
        }, 1000);
    }
    
    updateTimeDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Add visual warning when time is running low
        if (this.timeLeft <= 30) {
            this.timeDisplay.style.color = '#f44336';
            this.timeDisplay.style.animation = 'pulse 1s infinite';
        }
    }
    
    generateNewRound() {
        // Generate a random target color
        this.currentTargetColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.targetColorDisplay.style.backgroundColor = this.currentTargetColor;
        
        // Generate 9 similar colors, one being the exact match
        this.correctIndex = Math.floor(Math.random() * 9);
        const similarColors = this.generateSimilarColors(this.currentTargetColor, 8);
        
        // Insert the correct color at random position
        similarColors.splice(this.correctIndex, 0, this.currentTargetColor);
        
        // Apply colors to the grid
        this.colorOptions.forEach((option, index) => {
            option.style.backgroundColor = similarColors[index];
            option.classList.remove('correct', 'incorrect');
        });
    }
    
    generateSimilarColors(baseColor, count) {
        const colors = [];
        const baseRGB = this.hexToRgb(baseColor);
        
        for (let i = 0; i < count; i++) {
            const variation = Math.random() * 60 - 30; // ±30 variation
            const newRGB = {
                r: Math.max(0, Math.min(255, baseRGB.r + variation)),
                g: Math.max(0, Math.min(255, baseRGB.g + variation)),
                b: Math.max(0, Math.min(255, baseRGB.b + variation))
            };
            colors.push(this.rgbToHex(newRGB.r, newRGB.g, newRGB.b));
        }
        
        return colors;
    }
    
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    
    rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    
    handleColorClick(event) {
        if (!this.gameRunning) return;
        
        const clickedIndex = parseInt(event.target.dataset.index);
        
        if (clickedIndex === this.correctIndex) {
            // Correct answer
            event.target.classList.add('correct');
            this.score += 10;
            this.scoreDisplay.textContent = this.score;
            
            // Add bonus for quick answers
            if (this.timeLeft > 240) { // First minute
                this.score += 5;
                this.scoreDisplay.textContent = this.score;
            }
            
            // Generate new round after a short delay
            setTimeout(() => {
                this.generateNewRound();
            }, 500);
        } else {
            // Incorrect answer
            event.target.classList.add('incorrect');
            this.score = Math.max(0, this.score - 5); // Penalty for wrong answers
            this.scoreDisplay.textContent = this.score;
            
            // Show correct answer briefly
            this.colorOptions[this.correctIndex].classList.add('correct');
            
            setTimeout(() => {
                this.generateNewRound();
            }, 1000);
        }
    }
    
    endGame() {
        this.gameRunning = false;
        clearInterval(this.timer);
        
        this.finalScoreDisplay.textContent = this.score;
        this.gameOverScreen.style.display = 'flex';
        
        // Add celebration animation
        this.addCelebrationEffect();
    }
    
    addCelebrationEffect() {
        const container = document.querySelector('.container');
        container.style.animation = 'celebrate 0.5s ease-in-out';
        
        setTimeout(() => {
            container.style.animation = '';
        }, 500);
    }
    
    restartGame() {
        this.timeLeft = 300;
        this.score = 0;
        this.gameRunning = false;
        
        clearInterval(this.timer);
        
        this.timeDisplay.textContent = '05:00';
        this.timeDisplay.style.color = '';
        this.timeDisplay.style.animation = '';
        this.scoreDisplay.textContent = '0';
        
        this.startBtn.style.display = 'inline-block';
        this.restartBtn.style.display = 'none';
        this.gameOverScreen.style.display = 'none';
        
        this.colorOptions.forEach(option => {
            option.classList.remove('correct', 'incorrect');
            option.style.backgroundColor = '#ddd';
        });
        
        this.targetColorDisplay.style.backgroundColor = '#ddd';
    }
}

// Add CSS animation for celebration
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
    
    @keyframes celebrate {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ColorMatchGame();
});
