const PIPE_WIDTH = 40;
const PIPE_HEIGHT = 320;
const maxPipePositionY = -200;
const PIPE_GAP = 150;
const VELOCITYX = -1;
let pipeInstances = [];

class Pipe {
  constructor(ctx, bird, score) {
    this.ctx = ctx;
    this.pipePositionX = [];
    this.bird = bird;
    this.score = score;
    this.topPipe = {
      topX: canvas.width,
      topY: 0,
    };

    this.bottomPipe = {
      bottomX: canvas.width,
      bottomY: canvas.height,
    };
    this.dx = 3;
  }

  //Top Pipe
  drawPipe() {
    // for (let count = 0; count < this.pipePositionX.length; count++) {
    //   let p = this.xPositonPipes[count];

    //   let topYPositionPipe = p.y;
    //   let bottomYPositionPipe = p.y + this.spriteHeight + this.gapBetweenPipes;

    this.ctx.fillStyle = "green";
    //Top pipe

    this.ctx.fillRect(this.topPipe.topX, this.topPipe.topY, PIPE_WIDTH, 100);
    this.ctx.fillRect(
      this.bottomPipe.bottomX,
      this.bottomPipe.bottomY,
      PIPE_WIDTH,
      100
    );
    // }
  }

  movePipe() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.topPipe.topX += -1;
    this.bottomPipe.bottomX += -1;
  }
}
