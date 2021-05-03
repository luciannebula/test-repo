const enemies =[];

class Enemy {
    constructor(image, sx, sy, swidth, sheight, dx, dy, dw, dh, speed, moving){
        this.sx = sx;
        this.sy = sy;
        this.swidth = swidth;
        this.sheight = sheight;
        this.dx = dx;
        this.dy = dy;
        this.dw = dw;
        this.dh = dh;
        this.speed = speed;
        this.moving = moving;
        this.image = image;
        this.frameY = 0;
        this.frameX = 0;
        enemies.push(this);
    }
// enemy movement onto screen
    moveLeft(x){
     this.dx -= x;  
    }

// when player makes contact with enemy/npc  
    destroy(){
      let index = enemies.indexOf(this);
      enemies.splice(index, 1);
        score +=  10;
        scoreOutput.innerText = score;
    }
// sizing the enemy image to fit     
    handleFrame(){
        if(this.frameX === 0){
            this.frameX = (enemySprite.width/3)+5;
        }else if(this.frameX===(enemySprite.width/3)+5){
            this.frameX = (enemySprite.width/1.5)+5;
        }else if (this.frameX ===(enemySprite.width/1.5)+5){
            this.frameX = 0;
        }
    }

    returnSpriteValues(){
        return [
            this.image, 
            this.sx, this.sy, 
            this.swidth, this.sheight, 
            this.dx, this.dy,
            this.dw, this.dh
        ]
    }
    

    drawSprite(ctx){
        ctx.drawImage(this.image, this.sx + this.frameX, this.sy, this.swidth, this.sheight, this.dx, this.dy, this.dw, this.dh);
    }
    
};


const enemySprite = new Image();
enemySprite.src = "images/enemysprite.png";

const eVals = {
    sx: 0,
    sy: (enemySprite.height/20),
    sWidth: enemySprite.width/3,
    sHeight: enemySprite.height,
    dx:1000,
    dy:700,
    dWidth: (enemySprite.width/20)/3,
    dHeight: (enemySprite.height/20),
}
//console.log(enemySprite.width/20, enemySprite.height/20)

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}



const testEnemy = new Enemy(enemySprite, eVals.sx, eVals.sy, eVals.sWidth, eVals.sHeight, eVals.dx, eVals.dy, eVals.dWidth, eVals.dHeight);

setInterval(newEnemies, 9000);

function newEnemies(){
    new Enemy(enemySprite, eVals.sx, eVals.sy, eVals.sWidth, eVals.sHeight, eVals.dx, eVals.dy, eVals.dWidth, eVals.dHeight)

};
//enemies.push(testEnemy);



        // this.x= 300;
        // this.y= 400;
        // this.width= 200;
        // this.height= 200;
        // this.frameX= 0;
        // this.frameY= 0;
        // this.speed= 10;
        // this.moving= true;
