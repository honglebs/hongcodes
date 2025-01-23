const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

let score = 0;
let circle = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: 20,
};

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const distance = Math.sqrt(
    (mouseX - circle.x) ** 2 + (mouseY - circle.y) ** 2
  );

  if (distance < circle.radius) {
    score++;
    updateCirclePosition();
    drawGame();
  }
});

function updateCirclePosition() {
  circle.x = Math.random() * (canvas.width - circle.radius * 2) + circle.radius;
  circle.y = Math.random() * (canvas.height - circle.radius * 2) + circle.radius;
}

function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the circle
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();

  // Draw the score
  ctx.font = '16px Arial';
  ctx.fillStyle = '#333';
  ctx.fillText(`Score: ${score}`, 10, 20);
}

// Initialize the game
drawGame();
