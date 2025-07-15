const panels = document.querySelectorAll(".panel");
console.log(panels)
panels.forEach(panel=>{
    panel.addEventListener("click", (event)=>{
        if(panel.classList.contains("active")){
        panel.classList.remove("active");
    }
    event.target.classList.add("active");
    })
    
})