let gameMode = 0;
let menu;
let score = 0;
let bird;
let pipe = [];
let rank;
//let beatMeSound;

function setup() {
    createCanvas(300, 500);
    menu = new Menu();
    bird = new Bird();
    rank = new Rank();
}

function preload() {
    //beatMeSound = loadSound("sound/Children Yay.mp3");
    //sound.play();
}

function draw() {
    background(220);
    if (gameMode == 0) {
        menu.updateFaceLocation();
        menu.show();
        if (menu.start()) {
            score = 0;
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
            pipe[i].show();
            // bird.y is the bottom of the bird emoji, and the size of the emoji is 40
            if ((bird.x + 40 >= pipe[i].x && pipe[i].x >= 0) && (bird.y - 35 <= pipe[i].holeTop || bird.y >= pipe[i].holeBottom)) {
                gameOver();
            }
            if (bird.y >= 500) {
                gameOver();
            }
            if (bird.x + 40 >= pipe[i].x + 20 && pipe[i].x >= 0) {
                // when the bird pass the hole without toching the black bar
                score++;
            }
        }
        bird.update();
        setScore();
        bird.show();
    }

    else {
        rank.show();
        gameMode = 0;
    }
}

function mousePressed() {
    bird.up();
}

function gameOver() {
    noLoop();
    swal({
        title: "Game Over",
        text: "You hit the block!",
        icon: "warning",
        buttons: ["Rank", "OK"],
    })
        .then((isContinue) => {
            if (isContinue) {
                location.reload();
            }
            else {
                swal({
                    title: "Rank",
                    text: `BEST: 20\nUr score: ${Math.ceil(score / 26)}`,
                    button: "OK",
                })
                    .then((isOK) => {
                        if (isOK) {
                            location.reload();
                        }
                    });
            }
        });
};

function setScore() {
    textSize(25);
    fill(0);
    text(`Score: ${Math.ceil(score / 26)}`, 100, 50);
}