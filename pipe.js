function Pipe() {

    this.speed = -2;
    this.holeTopMax = 40;
    this.holeTopMin = 330;
    this.holeTop = random(this.holeTopMax, this.holeTopMin);
    this.holeBottom = this.holeTop + 150;
    //console.log(this.holeTop);
    this.x = 300;

    this.show = () => {
        fill(0)
        rect(this.x, 0, 20, 500);

        fill(220)
        noStroke();
        rect(this.x, this.holeTop, 20, 150);
    };

    this.update = () => {
        this.x += this.speed;
    };

    this.gameOver = () => {
        noLoop();
        swal({
            title: "Game Over",
            text: "You hit the block!",
            icon: "warning",
            buttons: ["Rank", "Continue"],
        })
            .then((isContinue) => {
                if (isContinue) {
                    location.reload();
                }
                else {
                    swal({
                        title: "Rank",
                        text: "First Place: Allen",
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
};