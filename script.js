// 1️⃣ Canvas setup
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

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
