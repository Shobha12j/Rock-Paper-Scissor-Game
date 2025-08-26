let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let sicssors=document.querySelector("#sics");

rock.addEventListener("click", ()=>{
    console.log("Rock was clicked");
});
paper.addEventListener("click", ()=>{
    console.log("Paper was clicked");
});
sicssors.addEventListener("click", ()=>{
    console.log("Scissors was clicked");
});

let player=document.querySelector("#ply1");
let computerGuess=document.querySelector("#ply2");

const choice=document.querySelectorAll(".choice");
choice.forEach(img =>{
    img.addEventListener("click", (e)=>{
        player=e.target.id;
        console.log(`The player choice: ${player}`)

        computerGuess=computerChoice();

        Winner(player,computerGuess);
    });
});

function computerChoice(){
    const choices=['rock','paper','scissors'];
    const randomIndex=Math.floor(Math.random()*choices.length);
    computerGuess=choices[randomIndex];
    console.log(`The computer choice: ${computerGuess}`);
    return computerGuess;
} 

const winner=document.querySelector("#winner");

function Winner(player,computerGuess){
    winner.classList.remove('text-disabled');
    if(player=="paper" && computerGuess=="rock" || player=="rock" && computerGuess=="scissors" ||player=="scissors" && computerGuess=="paper"){
        winner.textContent="Congratulations, The winner is Player";        
    }
    else if(player===computerGuess){
        winner.textContent="It's a Draw";
    }
    else{

        winner.textContent="Congratulations, The winner is Computer";
    }
    endGame();
}

function endGame(){
    choice.forEach(img=> {
        img.classList.add('disabled');
    });
}

const rst=document.querySelector("#reset");
rst.addEventListener("click", ()=>{
    choice.forEach(img=> {
        img.classList.remove('disabled');
        winner.classList.add('text-disabled');
    });
}); 



