

// Projects

var list = [
    { title: "", image: "", description: "" },
    { title: "D3X Brand", image: "images/achievment2.jpg", description: "Founded my personal brand (2023)" }
];

var arrowRight = document.getElementById("arrow-right");
var arrowLeft = document.getElementById("arrow-left");
var num = 0;

function updateProjects(num) {
    document.getElementById("pTitle").textContent = list[num].title;
    document.getElementById("pDescription").textContent = list[num].description;
    document.getElementById("pPhoto").src = list[num].image;
}

arrowRight.onclick = function(e) {
    num += 1;
    if (num > list.length - 1) {
        num = 0;
    }
    updateProjects(num)
}

arrowLeft.onclick = function(e) {
    num -= 1;
    if (num < 0) {
        num = list.length - 1;
    }
    updateProjects(num)
}

updateProjects(num)

// Skills

var list2 = [
    { title: "1", image: "", description: "1" },
    { title: "2", image: "", description: "2" }
];

var arrowRight2 = document.getElementById("arrow-right2");
var arrowLeft2 = document.getElementById("arrow-left2");
var num2 = 0;

function updateProjects2(num2) {
    document.getElementById("sTitle").textContent = list2[num2].title;
    document.getElementById("sDescription").textContent = list2[num2].description;
    document.getElementById("sPhoto").src = list2[num2].image;
}


arrowRight2.onclick = function(e) {
    num2 += 1;
    if (num2 > list.length - 1) {
        num2 = 0;
    }
    updateProjects2(num2)
}

arrowLeft2.onclick = function(e) {
    num2 -= 1;
    if (num2 < 0) {
        num2 = list.length - 1;
    }
    updateProjects2(num2)
}

updateProjects2(num2)