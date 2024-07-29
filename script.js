const oshi = ["zee", "raisha", "oniel", "olla", "muthe", "marsha", "lyn", "lulu", "lia", "jessi", "indira", "greesel", "gracie", "gracia", "flora", "fiony", "feni", "eli", "christy", "callie", "atin", "amanda", "adel"];
const image = document.querySelector(".gacha-container img");
let i = 0;

setInterval(function() {
image.setAttribute("src", "material/gacha oshi/" + oshi[i++] + ".jpeg");
if(i>=oshi.length) i=0;
}, 80);
