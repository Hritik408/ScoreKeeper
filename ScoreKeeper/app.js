const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const resetbutton = document.querySelector('#reset')
const p1display = document.querySelector('#p1display')
const p2display = document.querySelector('#p2display')
const winningScoreSelect = document.querySelector('#playto')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isgameOver = false;

p1button.addEventListener('click',function(){
    if(!isgameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            isgameOver = true;
            p1display.classList.add('winner')
            p2display.classList.add('loser')
        }
        p1display.textContent = p1Score;
    }
})

p2button.addEventListener('click',function(){
    if(!isgameOver){  // jab tak game over nahi hota h tab tk ye loop chalegi
        p2Score += 1;
        if(p2Score === winningScore){
            isgameOver = true;
            p2display.classList.add('winner')
            p1display.classList.add('loser')
        }
        p2display.textContent = p2Score;
    }
})

winningScoreSelect.addEventListener('change',function(){
     winningScore = parseInt(this.value);
     reset();
})

resetbutton.addEventListener('click',reset)

function reset(){
    isgameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('winner','loser')
    p2display.classList.remove('winner','loser')
}
