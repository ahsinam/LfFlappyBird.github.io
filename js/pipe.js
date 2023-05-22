const PIPE_WIDTH = 40;
let velocityX = -1;
let pipeInstances = [];

class Pipe {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = PIPE_WIDTH;
    this.height = 512;
    this.passed = false;
  }

  //Top Pipe
  drawPipe() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x, this.y, this.width - 100, this.height);
  }

  movePipe() {
    pipeInstances.forEach((pipe) => {
      pipe.x += velocityX;
      this.drawPipe();
    });
  }
}
