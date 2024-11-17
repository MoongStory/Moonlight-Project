const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const lineWidth = document.querySelector(".line-width");
const color = document.querySelector(".color");

const canvas = document.querySelector("canvas");
const ctx /* context */ = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;

let isPainting = false;

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

// region 마우스 이벤트
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
// end-region 마우스 이벤트

lineWidth.addEventListener("change", onLineWidthChange);

color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
