// Oshi Gallery
const oshiGallery = ["gita", "freya", "ella", "indah"];
const overlayMember = document.querySelector(".gallery-overlay");
const memberButton = document.querySelectorAll(".member a");
const closeButton = document.querySelector(".gallery-overlay .close")
const nextPrevButton = document.querySelectorAll(".member-container .button img");
const memberFrame = document.querySelector(".member-container figure img");
let x;

    // member button function
for(let i=0;i<memberButton.length;i++) {
  memberButton[i].addEventListener("click", function() {
  memberFrame.setAttribute("src", "material/" + oshiGallery[i] + ".jpg");
  overlayMember.style.display = "flex";
  x=i;
});
}

    // Close
closeButton.addEventListener("click", function() {
  x=0;
  overlayMember.style.display = "none";
});

    // Next
nextPrevButton[1].addEventListener("click", function() {
  if(x>=oshiGallery.length-1) x=-1;
  memberFrame.setAttribute("src", "material/" + oshiGallery[++x] + ".jpg");
  console.log(x);
});

    // Previous
nextPrevButton[0].addEventListener("click", function() {
  if(x-1<0) x = oshiGallery.length;
  memberFrame.setAttribute("src", "material/" + oshiGallery[--x] + ".jpg");
  console.log(x);
});



// Gacha Section
const gachaButton = document.querySelector(".gacha-button");
const oshi = ["Zee", "Raisha", "Oniel", "Olla", "Muthe", "Marsha", "Lyn", "Lulu", "Lia", "Jessi", "Indira", "Greesel", "Gracie", "Gracia", "Flora", "Fiony", "Feni", "Eli", "Christy", "Callie", "Kathrina", "Amanda", "Adel", "Gita", "Freya", "Ella", "Indah"];
const image = document.querySelector(".gacha-container img");
const memberName = document.querySelector(".member-name")
let i = 0;

gachaButton.addEventListener("click", function() {
  const startTime = new Date().getTime();
    setInterval(function() {
    if(new Date().getTime()-startTime>1200) {
        clearInterval;
        return;
      }
    memberName.innerHTML = "???";
    image.setAttribute("src", "material/gachaOshi/" + oshi[i++] + ".jpeg");
    if(i>=oshi.length) i=0;
  }, 80);

  setTimeout(function() {
    let memb = Math.floor(Math.random()*oshi.length);
    image.setAttribute("src", "material/gachaOshi/" + oshi[memb] + ".jpeg");
    memberName.innerHTML = oshi[memb];
  },1200)
})

