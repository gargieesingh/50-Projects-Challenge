const searchBtn = document.querySelector('button');
const input = document.querySelector('input');
console.dir(input);

searchBtn.addEventListener('click', (event)=>{
    input.value = "";
    let username = document.getElementById('username').value;
    let profileDiv = document.getElementById('profile');
    if(username === ""){
        profileDiv.innerHTML = "<p>Please enter a username !</p>"
    }
})