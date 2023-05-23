const gameStates = {
  current: 0,
  getReady: 0,
  gameRunning: 1,
  gameRunning: 2,
};

class GetReady {
  constructor(bird) {
    this.bird = bird;
  }
  beforeStartScreen(){
    this.bird.drawBird()
  }
}
