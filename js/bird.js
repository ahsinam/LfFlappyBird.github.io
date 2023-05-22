class Bird {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }

  drawBird() {
    let birdImage = new Image();
    birdImage.src = "../bird2.png";
    this.ctx.drawImage(birdImage, this.x, this.y, 90, 90);
  }

  moveBird() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawBird();
  }
}
