class StartButton {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.textXPos = x;
    this.textYPos = y;

    addEventListener("click", (e) => {
      gameStart = true;
    });
  }
  starGameButton() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(
      startRectXpos,
      startRectYpos,
      startRectWidth,
      startRectHeight
    );
    this.ctx.font = "bold 24px Verdana";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Start Game", this.textXPos, this.textYPos);
  }
}

class RestartButton {
  constructor(ctx, bird, pipes, flappyBird) {
    this.width = 140;
    this.height = 40;
    this.ctx = ctx;

    this.buttonX = (canvas.width - this.width) / 2;
    this.buttonY = (canvas.height - this.height) / 2;

    this.thresholdTopX = this.buttonX;
    this.thresholdTopY = this.buttonY;

    this.thresholdBottomX = this.buttonX + this.width;
    this.thresholdBottomY = this.buttonY + this.height;

    addEventListener("click", (ev) => {
      if (
        this.thresholdTopX <= ev.offsetX &&
        this.thresholdTopY <= ev.offsetY &&
        this.thresholdBottomX >= ev.offsetX &&
        this.thresholdBottomY >= ev.offsetY
      ) {
        if (gameEnd) {
          gameEnd = false;
          gameStart = false;
          pipeInstances = [];
          score = 0;
          bird.reset();
          flappyBird.reset();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
    });
  }
  drawButton() {
    this.ctx.fillStyle = "yellow";
    this.ctx.rect(this.buttonX, this.buttonY, this.width, this.height);
    this.ctx.fill();
    this.ctx.fillStyle = "black";
    this.ctx.font = "bold 24px Verdana";
    this.ctx.fillText("Restart", this.buttonX + 20, this.buttonY + 28);
  }
}
