const lineWidth = document.getElementById("line-width");

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
  console.log("event.target.value: ", event.target.value);
  ctx.beginPath();
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);
