let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
let moveUp = false;
const COLUMN_OFFSET = 150;
let gameEnd = false;
let score = 0;
let gameStart = false

//Pipe Constants
const PIPE_WIDTH = 40;
const PIPE_HEIGHT = 320;
const maxPipePositionY = -200;
const PIPE_GAP = 250;
const VELOCITYX = -3;
let pipeInstances = [];
