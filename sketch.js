let gameMode = 0;
let menu;
let score = 0;
let bird;
let pipe = [];
let rank;
let howToPlay;
let jumpSound, hitSound, scoreSound, bgm;

function preload() {
    hitSound = loadSound("sound/Hit sound.mp3");
    jumpSound = loadSound("sound/Cute sound.mp3");
    scoreSound = loadSound("sound/Score sound.mp3");
    bgm = loadSound("sound/Investigations – Kevin MacLeod.mp3");
    jumpSound.setVolume(0.5);
    scoreSound.setVolume(0.3);
    hitSound.setVolume(0.5);
}

function setup() {
    createCanvas(300, 500);
    menu = new Menu();
    bird = new Bird();
    rank = new Rank();
    howToPlay = new HowToPlay();
    bgm.loop();
}

function draw() {
    background(220);
    if (gameMode == 0) {
        menu.updateFaceLocation();
        menu.show();
        if (menu.start()) {
            score = 0;
            gameMode = 1;
        } else if (menu.howToPlay()) {
            gameMode = 2;
        } else if (menu.rank()) {
            gameMode = 3;
        } else {
            gameMode = 0;
        }
    }

    else if (gameMode == 1) {
        if (frameCount % 70 == 0) {
            pipe.push(new Pipe());
        }

        for (let i = 0; i < pipe.length; i++) {
            pipe[i].update();
            pipe[i].show();
            if (pipe[i].isHit(bird)) {
                hitSound.play();
                gameOver();
            }
            if (isScore(i)) {
                // when the bird pass the hole without toching the black bar
                scoreSound.play();
                score++;
            }
            if (pipe[i].offScreen()) {
                pipe.splice(i, 1);
                i--;
            }
        }
        setScore();
        bird.update();
        bird.show();
    }

    else if (gameMode == 2) {
        howToPlay.show();
        gameMode = 0;
    }

    else {
        rank.show();
        gameMode = 0;
    }
}

document.addEventListener('click', () => {
    jumpSound.play();
    bird.up();
})

// function mousePressed() {
//     jumpSound.play();
//     bird.up();
// }

function gameOver() {
    noLoop();
    swal({
        title: "Game Over",
        text: `You hit the block!\n\nUr score: ${score}`,
        icon: "warning",
        buttons: ["Rank", "OK"],
    })
        .then((isContinue) => {
            if (isContinue) {
                gameMode = 0;
            }
            else {
                rank.show();
                gameMode = 0;
            }
            // clear the whole array from index 0
            pipe.splice(0);
            loop();
        });
}

function isScore(i) {
    if (bird.x + 40 == pipe[i].x + 10)
        return true;
    // if ((bird.x + 40 >= pipe[i].x + 10) && (pipe[i].x >= 10)) {
    //     return true;
    // }
    return false;
}

function setScore() {
    textSize(25);
    fill(0);
    text(`Score: ${score}`, 100, 50);
}