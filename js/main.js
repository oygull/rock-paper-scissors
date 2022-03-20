let yourScore = document.getElementById('yourScore')
let player = document.getElementById('player');
let game = document.getElementById('game')
let gameResult = document.getElementById('gameResult');
let yourImage = document.getElementById('yourImage');
let playerImage = document.getElementById('playerImage');
let winner = document.getElementById('winner');
let score = 0;

function getResult(e){
  let randomNum = Math.floor((Math.random()*3)+1);
  game.style.display="none";
  gameResult.style.display='flex';
  if(e=='paper'){
    yourImage.src='images/paper.png'
  }
  else if(e=='rock'){
    yourImage.src='images/rock.png'
  }
  else if(e=='scissors'){
    yourImage.src='images/scissors.png'
  }
  getPlayersResult(randomNum,e);
}

function getPlayersResult(el,e){
  let bot= '';
    if(el==1){
       bot = 'paper'
    }
    else if(el==2){
      bot = 'rock'
    }
    else if(el==3){
      bot = 'scissors'
    }

   if(bot=='paper'){
    playerImage.src='images/paper.png'
    }
    else if(bot=='rock'){
      playerImage.src='images/rock.png'
    }
    else if(bot=='scissors'){
      playerImage.src='images/scissors.png'
    }
console.log(e,bot);

   if(bot == e){
    winner.innerHTML = 'DRAW'
   }
  else if(bot === "rock" && e === "scissors"){
    winner.innerHTML = 'YOU LOSE'
  }
  else if(bot === "scissors" && e === "paper"){
    winner.innerHTML = 'YOU LOSE'
  }
  else if(bot === "paper" && e === "rock"){
    winner.innerHTML = 'YOU LOSE'
  }
  else if(bot === "scissors" && e === "rock"){
     winner.innerHTML = 'YOU WIN'
     score++;
  }
  else if(bot === "paper" && e === "scissors"){
     winner.innerHTML = 'YOU WIN';
     score++;
  }
  else if(bot === "rock" && e === "papper"){
     winner.innerHTML = 'YOU WIN'
     score++;
  }
  yourScore.innerHTML= score;

  if(score==5){
    alert('Your score is 5, you win!');
    score=0;
    yourScore.innerHTML= score;
  }
}

  


// let botCount = 0;
// let yourCount =0;

// function firstScore(el){
//  
// 


//   botScore.innerHTML= botCount;
//   yourScore.innerHTML = yourCount;

// //   if(yourCount==6 || botCount==6){
 
// //   if(botCount>yourCount){
// //   player.innerHTML="Player Wins"
// //   }
// //   else if(botCount<yourCount){
// //     player.innerHTML="Player Wins"
// //   }
// //   botCount = 0;
// //   yourCount = 0;
// //   botScore.innerHTML= botCount;
// //   yourScore.innerHTML = yourCount;
// // }

// }

function restart(){
  gameResult.style.display='none';
  game.style.display="flex";
}

