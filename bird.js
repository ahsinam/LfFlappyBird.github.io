class Bird {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.birdie = new Image();
    this.birdie.src = "./bird2.png";

    // this.animatedBird = new Image();
    this.upBird = new Image();
    this.downBird = new Image();

    // this.animatedBird.src = "./animatedBird.gif";
    this.upBird.src = "./flappyUp.png";
    this.downBird.src = "./flappyDown.png";

    this.currentBird = this.birdie;

    this.velocityY = -6;
    this.gravity = 1.018;
    this.birdWidth = 50;
    this.birdHeight = 50;
  }

  drawBird() {
    if (gameStart && !gameEnd) this.currentBird = this.downBird;
    if (!gameEnd && moveUp) this.currentBird = this.upBird;

    this.ctx.drawImage(
      this.currentBird,
      this.x,
      this.y,
      this.birdWidth,
      this.birdHeight
    );
  }

  moveBird() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (moveUp == true) {
      this.velocityY = -6;
      //Bird doesn't go above or below the boundry.
      this.y = Math.min(
        Math.max(this.y + this.velocityY, 0),
        canvas.height - this.birdHeight * 5
      );
    } else {
      this.velocityY *= this.gravity;
      this.y -= this.velocityY;
    }
    this.drawBird();
  }
}
