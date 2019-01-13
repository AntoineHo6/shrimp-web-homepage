// title fade in
$('.headline-title').delay(200)
    .animate({ 'opacity': '1'}, 2500);

$('.sub-headline').delay(1000)
    .animate({ 'opacity': '1'}, 2500);

// I CAN REDO THIS WITH BOX NOT BOX1 ETC


// GET STARTED BOX
document.querySelector('.box1').onmouseout = function() {
    document.getElementById('box1-img').style.filter = "brightness(50%)";
};


document.querySelector('.box1').onmouseover = function() {
    document.getElementById('box1-img').style.filter = "brightness(75%)";
    $('#box1-title').delay(0)
        .animate({ 'opacity': '1'}, 1500);
};

document.querySelector('.box1').onmouseout = function() {
    document.getElementById('box1-img').style.filter = "brightness(50%)";
};

document.querySelector('#box1-title').onmouseover = function() {
    document.getElementById('box1-img').style.filter = "brightness(75%)";
};

// ACCESSORIES BOX
document.querySelector('.box2').onmouseover = function() {
    document.getElementById('box2-img').style.filter = "brightness(75%)";
    $('#box2-title').delay(0)
        .animate({ 'opacity': '1'}, 1500);
};

document.querySelector('.box2').onmouseout = function() {
    document.getElementById('box2-img').style.filter = "brightness(50%)";
};

document.querySelector('#box2-title').onmouseover = function() {
    document.getElementById('box2-img').style.filter = "brightness(75%)";
};

// SHRIMPS & NEEDS BOX
document.querySelector('.box3').onmouseover = function() {
    document.getElementById('box3-img').style.filter = "brightness(75%)";
    $('#box3-title').delay(0)
        .animate({ 'opacity': '1'}, 1500);
};

document.querySelector('.box3').onmouseout = function() {
    document.getElementById('box3-img').style.filter = "brightness(50%)";
};

document.querySelector('#box3-title').onmouseover = function() {
    document.getElementById('box3-img').style.filter = "brightness(75%)";
};


// PLANTS & MOSSES BOX
document.querySelector('.box4').onmouseover = function() {
    document.getElementById('box4-img').style.filter = "brightness(75%)";
    $('#box4-title').delay(0)
        .animate({ 'opacity': '1'}, 1500);
};

document.querySelector('.box4').onmouseout = function() {
    document.getElementById('box4-img').style.filter = "brightness(50%)";
};

document.querySelector('#box4-title').onmouseover = function() {
    document.getElementById('box4-img').style.filter = "brightness(75%)";
};

