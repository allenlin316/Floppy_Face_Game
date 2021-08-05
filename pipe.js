function Pipe() {
    this.holeTopMax = 130;
    this.holeTopMin = 30;
    this.speed = -2;
    this.holeTop = random(this.holeTopMax, this.holeTopMin);
    this.holeBottom = this.holeTop + 150;
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
};