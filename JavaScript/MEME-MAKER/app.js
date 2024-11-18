const modeBtn = document.querySelector(".mode-btn");
const destroyBtn = document.querySelector(".destroy-btn");
const eraserBtn = document.querySelector(".eraser-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const lineWidth = document.querySelector(".line-width");
const color = document.querySelector(".color");

const canvas = document.querySelector("canvas");
const ctx /* context */ = canvas.getContext("2d");

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;

let isPainting = false;
let isFilling = false;

function onMouseMove(event) {
  if (isPainting === true) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();

    return;
  }

  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(event) {
  isPainting = true;
}

function cancelPainting(event) {
  isPainting = false;
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
  ctx.beginPath();
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
  ctx.beginPath();
}

function onColorClick(event) {
  ctx.strokeStyle = event.target.dataset.color;
  ctx.fillStyle = event.target.dataset.color;
  ctx.beginPath();

  color.value = event.target.dataset.color;
}

function onModeClick(event) {
  if (isFilling === true) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCanvasClick(event) {
  if (isFilling === true) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onDestroyClick(event) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick(event) {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

// region 마우스 이벤트
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
// end-region 마우스 이벤트

lineWidth.addEventListener("change", onLineWidthChange);

color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
