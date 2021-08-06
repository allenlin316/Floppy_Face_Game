function Menu() {

    this.startBtn = false;
    this.howToPlayBtn = false;
    this.rankBtn = false;

    this.faceX = -40;
    this.faceY = 150;
    this.speed = 3;
    // this.startBtnX;
    // this.startBtnY;

    this.show = () => {
        // title
        textSize(40)
        fill(0);
        stroke(19, 141, 255);
        text("FloppyFace", 45, 100);

        // face flying
        textSize(30);
        text("😏", this.faceX, this.faceY);

        // play button
        fill("#ff7f50");
        noStroke();
        this.startBtn = rect(100, 250, 100, 50, 4);
        console.log(this.startBtn);
        fill(255);
        stroke(0);
        triangle(138, 260, 138, 290, 168, 275);
        // how to play button
        fill("#ff7f50");
        noStroke();
        this.howToPlayBtn = rect(100, 315, 100, 50, 4);
        fill(255);
        stroke(0);
        textSize(25);
        text("How?", 120, 350);
        // rank button
        fill("#ff7f50");
        noStroke();
        this.rankBtn = rect(100, 380, 100, 50, 4);
        fill(255);
        textSize(25);
        stroke(0);
        text("Rank", 120, 415);
    };

    this.updateFaceLocation = () => {
        this.faceX += this.speed;

        if (this.faceX > 300) {
            this.faceX = -40;
        }
    };

    this.start = () => {
        let btn = this.startBtn;
        if ((btn.mouseX >= 100 && btn.mouseX <= 200) && (btn.mouseY <= 300 && btn.mouseY >= 250)) {
            if (btn.mouseIsPressed) {
                return true;
            }
        }
        return false;
    };

    this.howToPlay = () => {
        let btn = this.howToPlayBtn;
        if ((btn.mouseX >= 100 && btn.mouseX <= 200) && (btn.mouseY <= 365 && btn.mouseY >= 315)) {
            if (btn.mouseIsPressed) {
                return true;
            }
        }
        return false;
    };

    this.rank = () => {
        let btn = this.rankBtn;
        if ((btn.mouseX >= 100 && btn.mouseX <= 200) && (btn.mouseY <= 430 && btn.mouseY >= 380)) {
            if (btn.mouseIsPressed) {
                return true;
            }
        }
        return false;
    };
}