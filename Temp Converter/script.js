const temps = document.querySelectorAll('input');
temps.forEach(temp =>{
    temp.addEventListener('change', (event)=>{
        if(temp == temps[0]){
            celValue = +(temp.value);
            temps[1].value = ((celValue * 9)/5 + 32).toFixed(2);
            temps[2].value = (celValue + 273.15).toFixed(2);
        }else if(temp == temps[1]){
            fahrValue = +(temp.value);
            temps[0].value = ((fahrValue -32) * 5/9).toFixed(2);
            temps[2].value = ((((fahrValue - 32) * 5)/9) + 273.15).toFixed(2);
        }
        else{
            kelValue = +(temp.value);
            temps[0].value = (kelValue - 273.15).toFixed(2);
            temps[1].value = ((temps[0].value * 9)/5 + 32).toFixed(2);
        }
    })
})