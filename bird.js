function Bird() {
    this.y = height / 2;
    this.x = 10;
    this.gravity = 0.3;
    this.lift = -10;
    this.velocity = 0;

    this.show = function () {
        textSize(40);
        text("😏", this.x, this.y);
    };

    this.update = () => {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > 500) {
            this.y = height;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    };

    this.up = () => {
        this.velocity += this.lift;
        this.velocity = this.velocity * 0.8;
        this.y += this.velocity;
        //console.log(this.velocity);
    };

}