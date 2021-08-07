function Pipe() {
    this.holeTopMax = 330;
    this.holeTopMin = 30;
    this.speed = -4;
    this.holeTop = random(this.holeTopMin, this.holeTopMax);
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

    this.isHit = (bird) => {
        // bird.y is the bottom of the bird emoji, and the size of the emoji is 40
        if ((bird.x + 40 >= this.x && this.x >= 0) && (bird.y - 35 <= this.holeTop || bird.y >= this.holeBottom)) {
            return true;
        }
        if (bird.y >= 500) {
            return true;
        }
        return false;
    };

    this.offScreen = () => {
        if (this.x < -20) {
            return true;
        }
        return false;
    };
};