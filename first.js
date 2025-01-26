let userscore = 0;
let compScore = 0;
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscoreBored=document.querySelector("#user-score");
const compscoreBored=document.querySelector("#comp-score");

const genCompChoice = () =>{
    const opttion = ["rock","paper","scissors"];
   const randomIdx= Math.floor(Math.random() *3);
   return opttion[randomIdx];
};
const drawGame = () =>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#007F73";
};
const showWiner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userscoreBored.innerText=userscore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscoreBored.innerText=compScore;
        msg.innerText=`You Lose. ${compChoice} beats Your ${userChoice}.`;
        msg.style.backgroundColor="red";

    }
};

const playGame = (userChoice)=> {
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
  //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ?false:true ;
        }else{
            userWin=compChoice==="rock" ?false:true;
        }
        showWiner(userWin,userChoice,compChoice);
    }
    
  

};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("Choice was cliced",userchoice);
        playGame(userchoice);
    });
});