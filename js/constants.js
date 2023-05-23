let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 200;
let moveUp = false;
const COLUMN_OFFSET = 150;
let gameEnd = false;
let score = 0;
let gameStart = false;

//Bird
const birdXpos = 100;
const birdYpos = 400;

//Pipe Constants
const PIPE_WIDTH = 40;
const PIPE_HEIGHT = 320;
const maxPipePositionY = -200;
const PIPE_GAP = 250;
const VELOCITYX = -3;
let pipeInstances = [];

//Start Button
const starButtonXpos = 100;
const startButtonYpos = 540;

const startRectXpos = 90;
const startRectYpos = 490;
const startRectWidth = 180;
const startRectHeight = 80;

//Restart Button
const restartTextXpos = canvas.width / 2;
const restartTextYpos = canvas.height / 2;

const restartRectXpos = canvas.width / 2 - 40;
const restartRectYpos = canvas.height / 2 - 40;
const restartRectWidth = 250;
const restartRectHeight = 60;

var highScore = +localStorage.getItem("highScore") || 0;
