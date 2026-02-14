const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* Resize support */
window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* Background stars */
let stars = [];

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.4
  });
}

/* Constellation shape */
let constellation = [
  {x: canvas.width/2 - 120, y: 200},
  {x: canvas.width/2 - 60, y: 170},
  {x: canvas.width/2, y: 220},
  {x: canvas.width/2 + 60, y: 170},
  {x: canvas.width/2 + 120, y: 200}
];

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);


  /* Moving background stars */
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

  /* Draw constellation lines */
  ctx.strokeStyle = "#ff69b4";
  ctx.lineWidth = 1.5;
  ctx.beginPath();

  constellation.forEach((point, index) => {
    if (index === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
    }
  });

  ctx.stroke();

  /* Draw constellation points */
  constellation.forEach(point => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

drawStars();
canvas.addEventListener("click", function() {

  const memoryBox = document.getElementById("memoryBox");
  const memoryPhoto = document.getElementById("memoryPhoto");
  const memoryText = document.getElementById("memoryText");

  const randomMemory = memories[Math.floor(Math.random() * memories.length)];

  memoryPhoto.src = randomMemory.photo;
  memoryText.innerHTML = randomMemory.text;

  memoryBox.classList.remove("hidden");
});

/* Memories + Photos */
let memories = [
  {
    text: "The first time you smiled at me ✨",
    photo: "photo1.jpeg"
  },
  {
    text: "That stupid inside joke 😂",
    photo: "photo2.jpeg"
  },
  {
    text: "Late night talks 🌙",
    photo: "photo3.jpeg"
  }
];

/* Click anywhere for memory */
canvas.addEventListener("click", function() {
  const memoryBox = document.getElementById("memoryBox");
  const memoryPhoto = document.getElementById("memoryPhoto");
  const memoryText = document.getElementById("memoryText");

  const randomMemory = memories[Math.floor(Math.random() * memories.length)];

  memoryPhoto.src = randomMemory.photo;
  memoryText.innerHTML = randomMemory.text;

  memoryBox.classList.remove("hidden");
});

/* Start music + hide intro */
function startExperience() {
  const music = document.getElementById("bgMusic");
  const content = document.querySelector(".content");

  music.play();
  content.style.display = "none";
}
