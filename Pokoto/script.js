const canvas = document.getElementById('canvas');
const contxt = canvas.getContext('2d');
let x;
let y;
let isPressed = false;
//MOUSE EVENTS
canvas.addEventListener('mousedown', (event)=>{
    isPressed = true;
})
canvas.addEventListener('mouseup', (event)=>{
    isPressed = false;
    x = undefined , y = undefined;
})
canvas.addEventListener('mousemove', (event)=>{
    if(isPressed){
        x0 = event.offsetX;
        y0 = event.offsetY;
        drawCircle(x0,y0);
        drawLine(x, y, x0, y0);
        x = x0;
        y = y0;
    }
})
//CANVAS SHAPES
function drawCircle(x,y){
    contxt.beginPath();
    contxt.arc(x, y, size, 0, Math.PI *2);
    contxt.fillStyle = color;
    contxt.fill();
}

function drawLine(x,y, x2, y2){
    contxt.beginPath();
    contxt.moveTo(x,y);
    contxt.lineTo(x2, y2);
    contxt.strokeStyle = color;
    contxt.lineWidth = size * 2;
    contxt.stroke();
}

