let computermove='';
let result='';
var yourpick='';
let score= JSON.parse(localStorage.getItem('score')) 
if(!score) 
score= {
    wins: 0,
    loss: 0,
    tie: 0
}
updateScore();
// moveUpdate();

 function play(){
    pickcomputermove();
    if(yourpick === 'stone'){
        yourpick='stone';
        if(computermove == 'papper' )
        result="you loss the match";
        else if(computermove == 'scissor' )
        result="the match won by you";
        else result="the match tie";
    }
    else if(yourpick === 'papper'){
        yourpick='papper';
        if(computermove == 'stone')
        result="the match won by you";
        else if(computermove == 'scissor' )
        result="you loss the match";
        else result="the match tie";
    }
    else if(yourpick === 'scissor'){
        yourpick='scissor';
        if(computermove == 'stone')
        result="you loss the match";
        else if(computermove == 'papper' )
        result="the match won by you";
        else result="the match tie";
    }
    if(result === 'the match won by you') score.wins +=1;
    else if(result === 'you loss the match') score.loss +=1;
    else if(result === "the match tie") score.tie +=1;

    // local storage
    localStorage.setItem('score',JSON.stringify(score));
    
    // to diplay moves
    moveUpdate();
    //to  updated scores
    updateScore();
    resultUpdate();

    // alert(`computer  picked ${computermove} and you picked ${yourpick} \n${result} \nwins=${score.wins} loss=${score.loss} tie=${score.tie}`)
}
function moveUpdate(){
    document.querySelector('.js-move-update')
    .innerHTML=`computer =   ${computermove} and
      you = ${yourpick} `;
}
function resultUpdate(){
document.querySelector('.js-resultupdate').innerHTML=`${result}`;
}
function updateScore(){
    document.querySelector('.js-scores-update')
        .innerHTML=` wins=${score.wins} loss=${score.loss}
         tie=${score.tie} `;
}
function pickcomputermove()
 {
    const randnum = Math.random();
        if(randnum>0 && 1/3>randnum )
        computermove='stone';
        else if(randnum>1/3 && randnum<1/2)
        computermove='papper';
        else if(randnum>1/2 && randnum<3/3)
        computermove ='scissor';
 }