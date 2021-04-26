const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

const keys = [];

// load images

const player= {
    x: 50,
    y: 700,
    width: 40,
    height: 55,
    frameX: 0,
    frameY: 0,
    speed: 10,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "images/hulk.png";
const background = new Image();
background.src ="images/background.jpg";


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

//let position = 0;

window.addEventListener("keydown", function(e){
    keys[e.key] = true;
    player.moving = true;
});
window.addEventListener("keyup", function(e){
    delete keys[e.key];
    player.moving = false;
});

function movePlayer(){
    console.log(keys)
    if (keys["ArrowUp"] && player.y > 100){
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (keys["ArrowLeft"] && player.x > 0){
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
    }
    if (keys["ArrowDown"] && player.y < canvas.height - player.height){
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    } 
    if (keys["ArrowRight"] && player.x < canvas.width - player.width){
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
    }           
}
function handlePlayerFrame(){
    if (player.frameX < 3 && player.moving) player.frameX++
    else player.frameX = 0;
}
/*
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.
    height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y ,player.width, player.height);
    movePlayer();
    handlePlayerFrame();
    requestAnimationFrame(animate);
}
animate();*/

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}

function animate(){
    requestAnimationFrame(animate);
    now = Date.now()
    elapsed = now -then;
    if(elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.
        height);
        drawSprite(enemySprite, enemy.width * enemy.frameX, enemy.height * enemy.frameY, enemy.width, enemy.height, enemy.x, enemy.y, enemy.width, enemy.height);
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y ,player.width, player.height);
        movePlayer();
        handlePlayerFrame();
    }
}
startAnimating(10);

/*const images = {};
images.enemy = new Image();
images.enemy.src = "images/enemysprite.png"

const enemyWidth = '78';
const enemyHeight = '108';
let enemyFrameX = 3;
let enemyFrameY = 3;
let enemyX = 0;
let enemyY = 0;
const enemyspeed = 4;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
     drawSprite(images.enemy, enemyWidth * enemyFrameX, enemyHeight * enemyFrameY, enemyWidth,
         enemyHeight, enemyX, enemyY, enemyWidth, enemyHeight);
}

window.onload = setInterval(animate, 1000/30);*/