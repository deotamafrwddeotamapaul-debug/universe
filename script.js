/* ===================== */
/* SETUP */
/* ===================== */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/* ===================== */
/* MEMORIES */
/* ===================== */

const memories = [
  { text: "The first time you smiled at me ✨", photo: "photo1.jpeg" },
  { text: "That stupid inside joke 😂", photo: "photo2.jpeg" },
  { text: "Late night talks 🌙", photo: "photo3.jpeg" }
];

/* ===================== */
/* STARS */
/* ===================== */

let stars = [];

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.4
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // solid black background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // moving stars
  ctx.fillStyle = "white";

  stars.forEach(star => {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

drawStars();

/* ===================== */
/* ENTER BUTTON */
/* ===================== */

enterBtn.addEventListener("click", () => {
  music.play().catch(() => {});
  document.querySelector(".content").remove();
});

/* ===================== */
/* CLICK / TAP */
/* ===================== */

function showMemory() {
  const memoryBox = document.getElementById("memoryBox");
  const memoryPhoto = document.getElementById("memoryPhoto");
  const memoryText = document.getElementById("memoryText");

  const random = memories[Math.floor(Math.random() * memories.length)];

  memoryPhoto.src = random.photo;
  memoryText.innerText = random.text;

  memoryBox.classList.remove("hidden");
}

canvas.addEventListener("click", showMemory);
canvas.addEventListener("touchstart", showMemory);
