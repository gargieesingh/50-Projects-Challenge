const progress = document.getElementById('progress');
const prev = document.querySelector('.Prev');
const next = document.querySelector('.next');
const circles = document.querySelectorAll('.step');
let currentActive = 1;

next.addEventListener('click', (event)=>{
    currentActive++;
    circles.forEach((circle, idx)=>{
        if(idx < currentActive){
            circle.classList.add('active');
        }
    })
    if(currentActive == circles.length){
        next.disabled = true;
        prev.disabled = false;
    }
    progress.style.width = ((currentActive-1)/(circles.length-1)*100) + "%";
})
prev.addEventListener('click', (event)=>{
    currentActive--;
    if(currentActive === 1){
        prev.disabled = true;
        next.disabled = false;
    }
    circles.forEach((circle,idx)=>{
        if(idx >= currentActive){
            circle.classList.remove('active');
        }
    })
    progress.style.width = ((currentActive-1)/(circles.length-1)*100) + "%";
})