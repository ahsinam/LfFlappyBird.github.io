// const getRandomValue = () => {
//   return Math.max(
//     Math.floor(Math.random(0, 9) * (canvas.height - COLUMN_OFFSET * 2)),
//     COLUMN_OFFSET
//   );
// };

class FlappyBirdGame {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ctx = canvas.getContext("2d");
    this.bird = new Bird(this.ctx, 100, 400);
    this.pipes = [new Pipe(this.ctx, this.bird, 0, 400)];
    this.TIMER = null;
    this.signal = 0;

    this.getReady = new GetReady(this.bird);

    addEventListener("keydown", (e) => {
      if (e.key == " ") {
        moveUp = true;
        gameStart = true;
      }
    });

    addEventListener("keyup", (e) => {
      if (e.key == " ") {
        moveUp = false;
      }
    });
  }

  init = () => {
    window.requestAnimationFrame(this.init);
    if (gameStart == false) {
      this.getReady.beforeStartScreen();
    }

    if (gameStart == true) {
      this.bird.moveBird();
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
          if (this.pipes.length > 7) {
            this.pipes.shift();
          }
        }
      }, 10);
      this.bird.drawBird();
    }
    // this.bird.moveBird();
    // for (let pipe of this.pipes) {
    //   pipe.drawPipe();
    // }

    // if (this.TIMER) clearInterval(this.TIMER);

    // this.TIMER = setInterval(() => {
    //   for (let pipe of this.pipes) {
    //     pipe.movePipe();
    //   }
    //   this.signal += 1;
    //   if (!(this.signal % 100)) {
    //     this.bird.drawBird();
    //     this.signal = 0;
    //     this.pipes.push(new Pipe(this.ctx, this.bird, 0, getRandomValue()));
    //     if (this.pipes.length > 7) this.pipes.shift();
    //   }
    // }, 10);
    // this.bird.drawBird();
  };
}

const birdGame = new FlappyBirdGame(canvas.width, canvas.height);
birdGame.init();
