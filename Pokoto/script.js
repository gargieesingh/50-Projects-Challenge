const canvas = document.getElementById('canvas');
const contxt = canvas.getContext('2d');


function drawCircle(x,y){
    contxt.beginPath();
    contxt.arc(x, y, 20, 0, Math.PI *2);
    contxt.fillStyle = color;
    contxt.fill();
}
drawCircle(100, 100);