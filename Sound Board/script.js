const sounds = ['applause', 'boo' , 'gasp', 'tada', 'victory', 'wrong'];

const buttons= document.querySelectorAll('.buttons');

sounds.forEach((sound,index)=>{
    buttons[index].addEventListener('click' , ()=>{
        stopSongs();
        document.getElementById(sound).play();
    })
})
function stopSongs(){
    sounds.forEach(sound=>{
        document.getElementById(sound).pause();
    })
}