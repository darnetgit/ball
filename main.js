var gameZone = document.getElementById("gameZone");
var ball = document.getElementById("ball");
var gameWidth = gameZone.clientWidth;
var gameHeight = gameZone.clientHeight;
var radius = gameWidth / 10;
ball.style.left = gameWidth / 2 -radius/2 + 'px'
ball.style.top = gameHeight / 2 -radius/2 + 'px'
ball.style.height = radius + 'px'
ball.style.width = radius + 'px'

function moveDown() {
    var currentTop = ball.style.top;
    var currentTopInt = parseFloat(currentTop.slice(0, -2));
    if (currentTopInt + radius + 5 < gameHeight) {
        ball.style.top = currentTopInt + 5 + 'px';
        ball.style.backgroundColor = 'blue';
    } else {
        ball.style.backgroundColor = 'red';
    }
}
function moveUp() {

    var currentTop = ball.style.top;
    var currentTopInt = parseFloat(currentTop.slice(0, -2));
    if (currentTopInt > 5) {
        ball.style.top = currentTopInt - 5 + 'px';
        ball.style.backgroundColor = 'blue';
    } else {
        ball.style.backgroundColor = 'red';
    }
}
function moveRight() {
    var currentLeft = ball.style.left;
    var currentLeftInt = parseFloat(currentLeft.slice(0, -2))
    if (currentLeftInt + radius + 5 < gameWidth) {
        ball.style.left = currentLeftInt + 5 + 'px';
        ball.style.backgroundColor = 'blue';
    } else {
        ball.style.backgroundColor = 'red';
    }
}
function moveLeft() {
    var currentLeft = ball.style.left;
    var currentLeftInt = parseFloat(currentLeft.slice(0, -2))
    if (currentLeftInt > 5) {
        ball.style.left = currentLeftInt - 5 + 'px';
        ball.style.backgroundColor = 'blue';
    } else {
        ball.style.backgroundColor = 'red';
    }
}

function reset() {
    gameZone = document.getElementById("gameZone");
    gameWidth = gameZone.clientWidth;
    gameHeight = gameZone.clientHeight;
    ball.style.left = gameWidth / 2 -radius/2 + 'px';
    ball.style.top = gameHeight / 2 -radius/2 + 'px';
    ball.style.backgroundColor = 'blue';
}