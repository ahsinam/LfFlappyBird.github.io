// const PIPE_WIDTH = 40;
// const PIPE_HEIGHT = 320;
// const maxPipePositionY = -200;
// const PIPE_GAP = 250;
// const VELOCITYX = -3;
// let pipeInstances = [];

class Pipe {
  constructor(ctx, bird, score, topHeight) {
    this.ctx = ctx;
    this.pipePositionX = [];
    this.bird = bird;
    this.score = score;
    this.topHeight = topHeight;
    this.bottomHeight = canvas.height - topHeight - PIPE_GAP;
    this.topPipe = {
      topX: canvas.width,
      topY: 0,
    };

    this.bottomPipe = {
      bottomX: canvas.width,
      bottomY: canvas.height - this.bottomHeight,
    };
    this.dx = 3;
  }

  //Top Pipe
  drawPipe() {
    this.ctx.fillStyle = "green";
    //Top pipe

    this.ctx.fillRect(
      this.topPipe.topX,
      this.topPipe.topY,
      PIPE_WIDTH,
      this.topHeight
    );
    this.ctx.fillRect(
      this.bottomPipe.bottomX,
      this.bottomPipe.bottomY,
      PIPE_WIDTH,
      this.bottomHeight
    );
    // }
  }

  movePipe() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.topPipe.topX += VELOCITYX;
    this.bottomPipe.bottomX += VELOCITYX;

    this.detectCollision();
  }

  detectCollision() {
    if (
      (this.bird.x < this.topPipe.topX + PIPE_WIDTH &&
        this.bird.x + this.bird.birdWidth > this.topPipe.topX &&
        this.bird.y < this.topPipe.topY + PIPE_HEIGHT &&
        this.bird.y + this.bird.birdHeight > this.topPipe.topY) ||
      (this.bird.x < this.bottomPipe.bottomX + PIPE_WIDTH &&
        this.bird.x + this.bird.birdWidth > this.bottomPipe.bottomX &&
        this.bird.y < this.bottomPipe.bottomY + PIPE_HEIGHT &&
        this.bird.y + this.bird.birdHeight > this.bottomPipe.bottomY) ||
      Math.floor(this.bird.y) + 50 > canvas.height
    ) {
      gameEnd = true;
    }
  }
}
