let houseIMG = document.getElementById("house");
let step = 0;
let flag = true;
let appleIMG = document.getElementById("apple");
let knopka = document.getElementById("knopka");
let hiKnopka = document.getElementById("hiKnopka");

function animation() {
    if (window.innerWidth - 1300 > step && flag) {
        step += 2;
    } else {
        step -= 2;
        flag = step == 0 ? true : false;
    }
    houseIMG.style.left = step + "px";
}
setInterval(animation, 30);

houseIMG.onclick = function() {
    window.location.href = 'diploma2.html';
};

appleIMG.onclick = function() {
    window.location.href = 'diploma3.html';
};

