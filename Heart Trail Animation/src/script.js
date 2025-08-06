const heart = document.querySelector('.heart');
const box = document.querySelector('.box');

box.addEventListener('mousemove', (event)=>{
    let X = event.offsetX;
    let Y = event.offsetY;

    //new span
    let newHeart = document.createElement('span');
    newHeart.className = heart.className;

    //span positioning
    newHeart.style.left= `${X}px`;
    newHeart.style.top= `${Y}px`;

    //hearts of different size
    const size = (Math.random() * 50).toFixed(3);
    newHeart.style.width =size + "px";
    newHeart.style.height = size + "px";

    box.appendChild(newHeart);

    setTimeout(()=>{
        newHeart.remove();
    }, 10000)
})