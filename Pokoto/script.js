const canvas = document.getElementById('canvas');
const contxt = canvas.getContext('2d');
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const sizeBox = document.getElementById("size");
const colorBox = document.getElementById("color");
const clear = document.getElementById("clear");

let x;
let y;
let isPressed = false;

colorBox.addEventListener('change', (event)=>{
    color = event.target.value;
})

clear.addEventListener('click' , ()=> contxt.clearRect(0, 0, canvas.width , canvas.height))

var size = parseInt(sizeBox.textContent);
decrease.addEventListener("click", (event)=>{
    let currentSize = parseInt(sizeBox.textContent);
    if(currentSize > 2){
        currentSize -= 2;
        sizeBox.textContent = currentSize;
        size = currentSize;
    }
    else{
        alert("This is the minimum brush size!");
    }
})

increase.addEventListener('click', ()=>{
    let currentSize = parseInt(sizeBox.textContent);
    if(currentSize < 80){
        currentSize += 2;
        sizeBox.textContent = currentSize;
        size = currentSize;
    }
    else{
        alert("This is the maximum brush size!")
    }
})


//MOUSE EVENTS
canvas.addEventListener('mousedown', (event)=>{
    isPressed = true;
    x = event.offsetX;
    y = event.offsetY;
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


