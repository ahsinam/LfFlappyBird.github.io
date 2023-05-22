let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Background {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ctx = canvas.getContext("2d");
    this.bird = new Bird(this.ctx, 100, 100);
    this.pipes = new Pipe(this.ctx, this.bird, 0);
    this.TIMER = null;
  }

  drawBackground() {
    let backgroundImage = new Image();
    backgroundImage.src = "../background.jpg";
    this.ctx.drawImage(
      backgroundImage,
      0,
      0,
      canvas.width,
      canvas.height - 100
    );
  }

  init = () => {
    window.requestAnimationFrame(this.init);
    // this.drawBackground();
    this.bird.drawBird();
    this.pipes.drawPipe();
    this.TIMER = setInterval(() => {
      this.pipes.movePipe();
    }, 1000);
  };
}

const birdGame = new Background(canvas.width, canvas.height);
birdGame.init();
