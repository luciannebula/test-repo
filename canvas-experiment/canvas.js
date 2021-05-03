const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1400;
canvas.height = 920;
const scoreOutput = document.querySelector("#score");

let score = 0;

const keys = [];

// load images

const player = {
    x: 50,
    y: 800,
    width: 40,
    height: 55,
    frameX: 0,
    frameY: 0,
    speed: 20,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "images/hulk.png";
const background = new Image();
background.src = "images/background.jpg";


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

//let position = 0;
// my player movement without being stuck 
window.addEventListener("keydown", function (e) {
    keys[e.key] = true;
    player.moving = true;
});
window.addEventListener("keyup", function (e) {
    delete keys[e.key];
    player.moving = false;
});
// my player functionality/movement
function movePlayer() {
    //console.log(keys)
    if (keys["ArrowUp"] && player.y > 100) {
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (keys["ArrowLeft"] && player.x > 0) {
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
    }
    if (keys["ArrowDown"] && player.y < canvas.height - player.height) {
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if (keys["ArrowRight"] && player.x < canvas.width - player.width) {
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
    }
}
function handlePlayerFrame() {
    if (player.frameX < 3 && player.moving) player.frameX++
    else player.frameX = 0;
}


let fps, fpsInterval, startTime, now, then, elapsed;
// animation frame to correspond with frame rate
function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

 
function checkCollision(player, enemy) {
    //check player pos with enemy pos and see if they collide
    //for (let i = 0; i < enemies.length; i++) {
        //let enemy = enemies[i];
        //console.log(enemy,"<--")
        if (player.x < enemy.dx + enemy.dw &&
            player.x + player.width > enemy.dx &&
            player.y < enemy.dy + enemy.dh &&
            player.y + player.height > enemy.dy) {
            //console.log("pow!")
            // collision detected!
            enemy.destroy();
        }
    
}

function animate() {
    requestAnimationFrame(animate);
    now = Date.now()
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.
            height);
         for(i = 0; i< enemies.length; i++){
             let currentEnemy = enemies[i];
             currentEnemy.moveLeft(4);
             currentEnemy.handleFrame();
             currentEnemy.drawSprite(ctx)
             checkCollision(player, currentEnemy);
         }
        
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
        movePlayer();
        handlePlayerFrame();
    }
}


startAnimating(5);


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