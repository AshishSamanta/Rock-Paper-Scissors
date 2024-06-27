let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
const message= document.querySelector("#msg");
const usco= document.querySelector("#usco");
const csco= document.querySelector("#csco");

const generateCompChoice=()=>{
    let options=["rock","paper","scissor"];
    const random=Math.floor(Math.random()*3);
    return options[random];
}
const gameDraw=()=>{
    message.innerText="Draw!! Lets play more";
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        message.innerText=`You win! your ${userChoice} bets my ${compChoice} :(`;
        userScore++;
        usco.innerText=userScore;
    }else{
        message.innerText=`You Lose! MY ${compChoice} beats your ${userChoice} ;)`;
        compScore++;
        csco.innerText=compScore;
    }

}

const playGame=(userChoice) =>{
    //getting comp choice
    const compChoice=generateCompChoice();
    
    if(userChoice === compChoice){
        gameDraw();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false : true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"? false : true;
        }else{
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
} 
choices.forEach((choice)=>{
      choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
      });
});