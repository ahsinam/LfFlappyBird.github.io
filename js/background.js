let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const COLUMN_OFFSET = 150;

const getRandomValue = () => {
  return Math.max(
    Math.floor(Math.random(0, 9) * (canvas.height - COLUMN_OFFSET * 2)),
    COLUMN_OFFSET
  );
};

class Background {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ctx = canvas.getContext("2d");
    this.bird = new Bird(this.ctx, 100, 100);
    this.pipes = [new Pipe(this.ctx, this.bird, 0, 400)];
    this.TIMER = null;
    this.signal = 0;
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
    for (let pipe of this.pipes) {
      pipe.drawPipe();
    }

    if (this.TIMER) clearInterval(this.TIMER);

    this.TIMER = setInterval(() => {
      for (let pipe of this.pipes) {
        pipe.movePipe();
      }
      this.signal += 1;
      if (!(this.signal % 100)) {
        this.bird.drawBird();
        this.signal = 0;
        this.pipes.push(new Pipe(this.ctx, this.bird, 0, getRandomValue()));
        if (this.pipes.length > 7) this.pipes.shift();
      }
    }, 10);
    this.bird.drawBird();
  };
}

const birdGame = new Background(canvas.width, canvas.height);
birdGame.init();
