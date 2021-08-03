function Menu() {

    this.startBtn = false;
    this.rankBtn = false;

    // this.startBtnX;
    // this.startBtnY;

    this.show = () => {
        // title
        textSize(40)
        fill(0);
        stroke(19, 141, 255);
        text("FloppyFace", 45, 100);

        // play button
        fill("#ff7f50");
        noStroke();
        this.startBtn = rect(100, 300, 100, 50, 4);
        console.log(this.startBtn);
        fill(255);
        stroke(0);
        triangle(138, 310, 138, 340, 168, 325);
        // rank button
        fill("#ff7f50");
        noStroke();
        this.rankBtn = rect(100, 380, 100, 50, 4);
        fill(255);
        textSize(25);
        stroke(0);
        text("Rank", 120, 415);
    };

    this.start = () => {
        if ((this.startBtn.mouseX >= 100 && this.startBtn.mouseX <= 200) && (this.startBtn.mouseY <= 350 && this.startBtn.mouseY >= 300)) {
            if (this.rankBtn.mouseIsPressed) {
                return true;
            }
        }
        return false;
    };

    this.rank = () => {
        if ((this.rankBtn.mouseX >= 100 && this.rankBtn.mouseX <= 200) && (this.rankBtn.mouseY <= 430 && this.rankBtn.mouseY >= 380)) {
            if (this.rankBtn.mouseIsPressed) {
                return true;
            }
        }

        return false;
    };
}