// ملف game.js
const player = document.getElementById('player');
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');

let isGameRunning = false;
let playerLane = 1; // 0: يسار، 1: وسط، 2: يمين

// بدء اللعبة
startButton.addEventListener('click', () => {
    startScreen.style.display = 'none'; // اخفاء شاشة البداية
    isGameRunning = true;
    startGameLoop();
});

// التحكم بالكيبورد
document.addEventListener('keydown', (e) => {
    if (!isGameRunning) return;

    if (e.key === 'ArrowLeft' && playerLane > 0) {
        playerLane--;
    } else if (e.key === 'ArrowRight' && playerLane < 2) {
        playerLane++;
    }

    // تحديث مكان اللاعب
    updatePlayerPosition();
});

function updatePlayerPosition() {
    // الحارات الثلاثة (تحريك أفقي)
    // -10vw للحارة اليسرى، 0vw للوسط، +10vw لليمنى
    const lanePositions = ['-10vw', '0vw', '10vw'];
    player.style.left = `calc(50% + ${lanePositions[playerLane]})`;
}

// حلقة اللعبة الرئيسية (Game Loop)
function startGameLoop() {
    if (!isGameRunning) return;

    // هنا بنحط منطق تحريك العقبات، حساب النتيجة، إلخ.
    // (لتبسيط الكود الآن، هنسيبها فاضية ونركز على الشكل)

    requestAnimationFrame(startGameLoop);
}
