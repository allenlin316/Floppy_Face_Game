let bird;
let pipe = [];
function setup() {
    createCanvas(300, 500);
    bird = new Bird();
}

function draw() {
    background(220);

    if (frameCount % 100 == 0) {
        pipe.push(new Pipe());
    }

    for (let i = 0; i < pipe.length; i++) {
        pipe[i].update();

        // bird.y is the bottom of the bird emoji, and the size of the emoji is 40
        if ((bird.x + 40 >= pipe[i].x && pipe[i].x >= 0) && (bird.y - 35 <= pipe[i].holeTop || bird.y >= pipe[i].holeBottom)) {
            //console.log(bird.y, pipe[i].holeTop, pipe[i].holeBottom);
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

function mousePressed() {
    bird.up();
};