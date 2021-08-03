let gameMode = 0;
let menu;
let bird;
let pipe = [];
let rank;

function setup() {
    createCanvas(300, 500);
    menu = new Menu();
    bird = new Bird();
    rank = new Rank();
}

function draw() {
    background(220);
    if (gameMode == 0) {
        menu.show();
        // textSize(15);
        // text("😏", 79, 95);
        if (menu.start()) {
            gameMode = 1;
        } else if (menu.rank()) {
            gameMode = 2;
        } else {
            gameMode = 0;
        }
    }

    else if (gameMode == 1) {
        if (frameCount % 100 == 0) {
            pipe.push(new Pipe());
        }

        for (let i = 0; i < pipe.length; i++) {
            pipe[i].update();

            // bird.y is the bottom of the bird emoji, and the size of the emoji is 40
            if ((bird.x + 40 >= pipe[i].x && pipe[i].x >= 0) && (bird.y - 35 <= pipe[i].holeTop || bird.y >= pipe[i].holeBottom)) {
                console.log(bird.y, pipe[i].holeTop, pipe[i].holeBottom);
                pipe[i].gameOver();
            }

            if (bird.y >= 500) {
                pipe[i].gameOver();
            }

            pipe[i].show();


        }
        bird.update();
        bird.show();
    }

    else {
        rank.show();
        gameMode = 0;
    }
}

function mousePressed() {
    bird.up();
};