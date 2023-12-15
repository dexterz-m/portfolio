var list = [
    { title: "Bizness24h", image: "images/achievment1.jpeg", description: "5th place in Latvia (2023)" },
    { title: "D3X Franchise", image: "images/achievment2.jpg", description: "Founded my peronal franchise (2023)" }
];

var arrowRight = document.getElementById("arrow-right");
var arrowLeft = document.getElementById("arrow-left");
var num = 0;
function updateProjects(num) {
    document.getElementById("aTitle").textContent = list[num].title;
    document.getElementById("aDescription").textContent = list[num].description;
    document.getElementById("aPhoto").src = list[num].image;
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