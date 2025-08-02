const moves = document.querySelectorAll('.move');
const statement = document.querySelector('.statement');
var yourScore = document.querySelector('.your-score-value');
var compScore = document.querySelector('.computer-score-value');

let rdnNum = Math.floor(Math.random() * moves.length);

moves.forEach((move,index)=> {
    var moveVal = move.dataset.value;
    moveVal = index;
    
    move.addEventListener('click', ()=>{
        rdnNum = Math.floor(Math.random() * moves.length);
        console.log(moveVal, rdnNum);
        if(moveVal == rdnNum){
            statement.textContent = "IT'S A TIE!";
        }else if((moveVal == 0 && rdnNum == 2) || (moveVal == 2 && rdnNum == 1) || (moveVal == 1 && rdnNum == 0)){
            statement.textContent = "YOU WON!";
            var yourScr = parseInt(yourScore.textContent);
            yourScr++;
        }
        else{
            statement.textContent = "YOU LOSE!";
            var compScr = parseInt(compScore.textContent);
            compScr++;
        }
    })
});