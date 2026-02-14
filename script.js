// 1️⃣ Canvas setup
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// 2️⃣ Memories array MUST be defined BEFORE click event
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

function showMemory() {
  const memoryBox = document.getElementById("memoryBox");
  const memoryPhoto = document.getElementById("memoryPhoto");
  const memoryText = document.getElementById("memoryText");

  const randomMemory = memories[Math.floor(Math.random() * memories.length)];

  memoryPhoto.src = randomMemory.photo;
  memoryText.innerHTML = randomMemory.text;

  memoryBox.classList.remove("hidden");
}

canvas.addEventListener("click", showMemory);
canvas.addEventListener("touchstart", showMemory);


// 3️⃣ drawStars function
function drawStars() {
   ...
}

// 4️⃣ Start animation
drawStars();

// 5️⃣ Click event AFTER everything
canvas.addEventListener("click", function() {
   ...
});
