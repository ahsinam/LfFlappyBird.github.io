const gameStates = {
  current: 0,
  getReady: 0,
  gameRunning: 1,
  gameRunning: 2,
};

class GetReady {
  constructor(ctx, bird, button) {
    this.ctx = ctx;
    this.bird = bird;
    this.imageWidth = canvas.width;
    this.imageHeight = canvas.height;
    this.backgroundImage = new Image();
    this.backgroundImage.src = "./flappyBirdBackground.png";

    this.startButton = button;
  }
  beforeStartScreen() {
    this.drawBackground();
    this.bird.drawBird();
    this.ctx.font = "bold 24px Verdana";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("High score", 240, 70);
    this.ctx.fillText(`${highScore}`, 400, 70);
    this.startButton.starGameButton();
    this.ctx.fillText("Press Space button inorder to move the bird.", 240, 150);
  }

  drawBackground() {
    this.ctx.drawImage(
      this.backgroundImage,
      0,
      0,
      this.imageWidth,
      this.imageHeight
    );
  }

  scoreBoard() {
    this.ctx.font = "bold 24px Verdana";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Score: ", 10, 40);
    this.ctx.fillText(score, 120, 40);
  }

  afterGameEnds() {}
}
