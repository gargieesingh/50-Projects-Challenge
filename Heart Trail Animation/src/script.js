const heart = document.querySelector('.heart');
const box = document.querySelector('.box');

box.addEventListener('mousemove', (event)=>{
    let X = event.offsetX;
    let Y = event.offsetY;
    heart.style.left= `${X}px`;
    heart.style.top= `${Y}px`;
    let newHeart = document.createElement('span');
    newHeart.className = heart.className;
    box.appendChild(newHeart);
    newHeart.style.left= `${X}px`;
    newHeart.style.top= `${Y}px`;
})