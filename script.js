// Oshi Gallery
const oshiGallery = ["gita", "freya", "ella", "indah"];
const overlayMember = document.querySelector(".gallery-overlay");
const memberButton = document.querySelectorAll(".member a");
const closeButton = document.querySelector(".gallery-overlay .close");
const nextPrevButton = document.querySelectorAll(".member-container .button img");
const memberFrame = document.querySelector(".member-container figure img");
let x = 0;

// Fungsi untuk memperbarui gambar berdasarkan indeks x
function updateGallery(index) {
  memberFrame.setAttribute("src", `material/${oshiGallery[index]}.jpg`);
}

// view member
memberButton.forEach((button, i) => {
  button.addEventListener("click", () => {
    x = i;
    updateGallery(x);
    overlayMember.style.display = "flex";
  });
});

// Close button
closeButton.addEventListener("click", () => {
  overlayMember.style.display = "none";
});

// Next & Previous Buttons
nextPrevButton.forEach((button, i) => {
  button.addEventListener("click", () => {
    x = (x + (i === 1 ? 1 : -1) + oshiGallery.length) % oshiGallery.length;
    updateGallery(x);
  });
});

// Gacha Section
const gachaButton = document.querySelector(".gacha-button");
const oshi = [
  "Zee", "Raisha", "Oniel", "Olla", "Muthe", "Marsha", "Lyn", "Lulu", "Lia", "Jessi",
  "Indira", "Greesel", "Gracie", "Gracia", "Flora", "Fiony", "Feni", "Eli", "Christy",
  "Callie", "Kathrina", "Amanda", "Adel", "Gita", "Freya", "Ella", "Indah"
];
const image = document.querySelector(".gacha-container img");
const memberName = document.querySelector(".member-name");

function startGacha() {
  let rollCount = 0;
  const maxRolls = 15; 
  const intervalSpeed = 80; 
  let intervalID = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * oshi.length);
    memberName.innerHTML = "???";
    image.setAttribute("src", `material/gachaOshi/${oshi[randomIndex]}.jpeg`);
    rollCount++;
    if (rollCount >= maxRolls) {
      clearInterval(intervalID);
      selectFinalResult();
    }
  }, intervalSpeed);
}

function selectFinalResult() {
  let finalIndex = Math.floor(Math.random() * oshi.length);
  setTimeout(() => {
    image.setAttribute("src", `material/gachaOshi/${oshi[finalIndex]}.jpeg`);
    memberName.innerHTML = oshi[finalIndex];
  }, 300);
}

gachaButton.addEventListener("click", () => {
  startGacha();
});
