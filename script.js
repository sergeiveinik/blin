let soundBattons = document.querySelectorAll(".audi>div");
let sounds = document.querySelectorAll("audio");

for (let i = 0; i < soundBattons.length; i += 1) {
    soundBattons[i].addEventListener("click", playSound(i));
}

function playSound(item) {
    return function () {
        sounds[item].play();
        sounds[item].loop = true;
    }
}