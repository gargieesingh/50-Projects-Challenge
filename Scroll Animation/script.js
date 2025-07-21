const boxes = document.querySelectorAll(".box");
boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < window.innerHeight/1.2){
            box.classList.add("show")
        }
        else{
            box.classList.remove("show")
        }
    })
window.addEventListener("scroll", (event)=>{
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < window.innerHeight/1.2){
            box.classList.add("show")
        }
        else{
            box.classList.remove("show")
        }
    })
})