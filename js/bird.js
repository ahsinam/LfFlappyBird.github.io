class Bird {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.birdie = new Image();
    this.birdie.src = "../bird2.png";

    this.velocityY = 0;
    this.gravity = 0.4;
    this.birdWidth = 50;
    this.birdHeight = 50;
  }

  drawBird() {
    this.ctx.drawImage(
      this.birdie,
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
      this.velocityY += this.gravity;
      //Bird doesn't above the boundry.
      this.y = Math.max(this.y + this.velocityY, 0);
      this.drawBird();
    } else {
      this.y -= this.velocityY;
      this.drawBird();
    }
  }
}
