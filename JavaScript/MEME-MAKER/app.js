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

// region 마우스 이벤트
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
// end-region 마우스 이벤트

lineWidth.addEventListener("change", onLineWidthChange);

color.addEventListener("change", onColorChange);
