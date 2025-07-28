const canvas = document.getElementById('canvas');
const contxt = canvas.getContext('2d');
let x;
let y;

function drawCircle(x,y){
    contxt.beginPath();
    contxt.arc(x, y, 10, 0, Math.PI *2);
    contxt.fillStyle;
    contxt.fill();
}

function drawLine(x,y, x2, y2){
    contxt.beginPath();
    contxt.moveTo(x,y);
    contxt.lineTo(x2, y2);
    contxt.strokeStyle = "black";
    contxt.lineWidth = 20;
    contxt.stroke();
}

