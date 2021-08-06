let gameMode = 0;
let menu;
let score = 0;
let bird;
let pipe = [];
let rank;
let jumpSound;
let hitSound;
let scoreSound;
let bgm;

function setup() {
    createCanvas(300, 500);
    menu = new Menu();
    bird = new Bird();
    rank = new Rank();
    bgm.loop();
}

function preload() {
    hitSound = loadSound("sound/Hit sound.mp3");
    jumpSound = loadSound("sound/Cute sound.mp3");
    scoreSound = loadSound("sound/Ding sound.mp3");
    bgm = loadSound("sound/Investigations – Kevin MacLeod.mp3");
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

            if (isLose(i)) {
                hitSound.play();
                gameOver();
            }
            if (isLose(i)) {
                hitSound.play();
                gameOver();
            }
            if (isScore(i)) {
                // when the bird pass the hole without toching the black bar
                if (score % 11 == 0)
                    scoreSound.play();
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
    jumpSound.play();
    bird.up();
}

function isLose(i) {
    // bird.y is the bottom of the bird emoji, and the size of the emoji is 40
    if ((bird.x + 40 >= pipe[i].x && pipe[i].x >= 0) && (bird.y - 35 <= pipe[i].holeTop || bird.y >= pipe[i].holeBottom)) {
        return true;
    }
    if (bird.y >= 500) {
        return true;
    }
    return false;
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
                    text: `BEST: 20\nUr score: ${Math.ceil(score / 11)}`,
                    button: "OK",
                })
                    .then((isOK) => {
                        if (isOK) {
                            location.reload();
                        }
                    });
            }
        });
}

function isScore(i) {
    if (bird.x + 40 >= pipe[i].x + 20 && pipe[i].x >= 10) {
        return true;
    }
    return false;
}

function setScore() {
    textSize(25);
    fill(0);
    text(`Score: ${Math.ceil(score / 11)}`, 100, 50);
}