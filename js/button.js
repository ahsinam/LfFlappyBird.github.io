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

class RestartGameButton {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.textXPos = x;
    this.textYPos = y;

    addEventListener("click", (e) => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      gameStart = true;
      gameEnd = false;
      score = 0;
    });
  }
  restartGameButton() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(
      restartRectXpos,
      restartRectYpos,
      restartRectWidth,
      restartRectHeight
    );
    this.ctx.font = "bold 24px Verdana";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Restart Game", restartTextXpos, restartTextYpos);
  }
}
