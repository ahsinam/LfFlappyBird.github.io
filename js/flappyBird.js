class FlappyBirdGame {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ctx = canvas.getContext("2d");
    this.bird = new Bird(this.ctx, birdXpos, birdYpos);
    this.pipes = [new Pipe(this.ctx, this.bird, score, 400)];
    this.TIMER = null;
    this.signal = 0;

    this.startButton = new StartButton(
      this.ctx,
      starButtonXpos,
      startButtonYpos
    );

    this.restartButton = new RestartGameButton(
      this.ctx,
      restartTextXpos,
      restartTextYpos
    );

    this.getReady = new GetReady(this.ctx, this.bird, this.startButton);

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
      if (gameEnd == false) {
        this.bird.moveBird();
        this.getReady.drawBackground();
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
        this.getReady.scoreBoard();
        this.bird.drawBird();
      } else if (gameEnd == true) {
        if (this.TIMER) {
          clearInterval(this.TIMER);
          this.TIMER = null;
        }
        if (score > highScore) {
          highScore = score;
          localStorage.setItem("highScore", score);
        }
        this.getReady.drawBackground();

        for (let pipe of this.pipes) {
          pipe.drawPipe();
        }
        this.getReady.scoreBoard();
        this.bird.drawBird();
        this.restartButton.restartGameButton();
        this.pipes = [new Pipe(this.ctx, this.bird, score, 400)];
      }
    }
  };
}

const birdGame = new FlappyBirdGame(canvas.width, canvas.height);
birdGame.init();
