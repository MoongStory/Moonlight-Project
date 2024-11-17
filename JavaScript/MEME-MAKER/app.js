const canvas = document.querySelector("canvas");
const ctx /* context */ = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

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

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
