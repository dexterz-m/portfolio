

// Projects

var list = [
    { title: "This website", image: "images/project1.png", description: "It was made by Me!" },
    { title: "D3X Brand", image: "images/project2.jpg", description: "Founded my personal brand (2023)" }
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
    { title: "After Effects", image: "images/Ae.png", description: "Handling basics of Ae" },
    { title: "Languages", image: "images/languages.png", description: "Can contact in 4 languages" },
    { title: "Programming", image: "images/programing.png", description: "Python, HTML, CSS, JS" }
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
    if (num2 > list2.length - 1) {
        num2 = 0;
    }
    updateProjects2(num2)
}

arrowLeft2.onclick = function(e) {
    num2 -= 1;
    if (num2 < 0) {
        num2 = list2.length - 1;
    }
    updateProjects2(num2)
}

updateProjects2(num2)


// Hobbies


var list3 = [
    { title: "Traveling", image: "images/globe.png", description: "Visited 11 countries" },
    { title: "Sports", image: "images/sport.png", description: "I can play all kinds of sports" }
]

var arrowRight3 = document.getElementById("arrow-right3");
var arrowLeft3 = document.getElementById("arrow-left3");
var num3 = 0;

function updateProjects3(num3) {
    document.getElementById("hTitle").textContent = list3[num3].title;
    document.getElementById("hDescription").textContent = list3[num3].description;
    document.getElementById("hPhoto").src = list3[num3].image;
}


arrowRight3.onclick = function(e) {
    num3 += 1;
    if (num3 > list3.length - 1) {
        num3 = 0;
    }
    updateProjects3(num3)
}

arrowLeft3.onclick = function(e) {
    num3 -= 1;
    if (num3 < 0) {
        num3 = list3.length - 1;
    }
    updateProjects3(num3)
}

updateProjects3(num3)