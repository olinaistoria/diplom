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
    document.getElementById('d').style.display = 'none';
};

appleIMG.onclick = function() {
    window.location.href = 'diploma3.html';
};

document.getElementById('a').style.display = 'none';
document.getElementById('kc').style.display = 'none';
document.getElementById('kb').style.display = 'none';
document.getElementById('kc').style.display = 'none';
document.getElementById('kd').style.display = 'none';

function bla() {
     document.getElementById('a').style.display = 'block';
     document.getElementById('ka').style.display = 'none';
     document.getElementById('kb').style.display = 'block';
}

document.getElementById('b').style.display = 'none';
function bla2() {
    document.getElementById('b').style.display = 'block';
    document.getElementById('kb').style.display = 'none';
    document.getElementById('kc').style.display = 'block';
  }

document.getElementById('c').style.display = 'none';
function bla3() {
    document.getElementById('c').style.display = 'block';
    document.getElementById('kc').style.display = 'none';
    document.getElementById('kd').style.display = 'block';
  }

document.getElementById('d').style.display = 'none';
function bla4() {
    document.getElementById('d').style.display = 'block';
    document.getElementById('kd').style.display = 'none';
  }

/* document.getElementById('').style.display = 'none';
function bla() {
    document.getElementById('').style.display = 'block';
  } */

