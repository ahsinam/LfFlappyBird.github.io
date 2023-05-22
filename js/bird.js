class Bird {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.birdie = new Image();
    this.birdie.src = "../bird2.png";
  }

  drawBird() {
    this.ctx.drawImage(this.birdie, this.x, this.y, 90, 90);
  }

  moveBird() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawBird();
  }
}
