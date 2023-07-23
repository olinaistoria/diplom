let btn = document.getElementById("btn");
btn.addEventListener("click", stopApple1);
/* let restart = document.getElementById("restert");
restart.addEventListener("click"); */
let apple1 = document.getElementById("apple1");
let apple2 = document.getElementById("apple2");
let apple3 = document.getElementById("apple3");
let apple4 = document.getElementById("apple4");
let apple5 = document.getElementById("apple5");

function stopApple1() {
    let left = window.getComputedStyle(apple1).getPropertyValue("left");
    apple1.classList.remove("animate");
    apple1.style.left = left;
    apple2.style.visibility = "visible";
    btn.addEventListener("click", stopApple2);
}

function stopApple2() {
    btn.addEventListener("click", stopApple2);
    let left = window.getComputedStyle(apple2).getPropertyValue("left");
    apple2.classList.remove("animate");
    apple2.style.left = left;
    apple3.style.visibility = "visible";
    btn.addEventListener("click", stopApple3);
    document.getElementById("restart").style.display = "block";
}

function stopApple3() {
    let left = window.getComputedStyle(apple3).getPropertyValue("left");
    apple3.classList.remove("animate");
    apple3.style.left = left;
    apple4.style.visibility = "visible";
    btn.addEventListener("click", stopApple4);
}

function stopApple4() {
    let left = window.getComputedStyle(apple4).getPropertyValue("left");
    apple4.classList.remove("animate");
    apple4.style.left = left;
    apple5.style.visibility = "visible";
    btn.addEventListener("click", stopApple5);
}

function stopApple5() {
    let left = window.getComputedStyle(apple5).getPropertyValue("left");
    apple5.classList.remove("animate");
    apple5.style.left = left;
}


