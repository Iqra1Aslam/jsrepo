let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const gencompchoice=()=>
{
	const options = ["rock", "paper", "scissors"];
	const index=Math.floor(Math.random()*3);
	return options[index];
};
const drawGame=()=>
{
	
		console.log("Game Draw");
		msg.innerText="Game Draw";
		msg.style.backgroundColor="pink";
	
};
const showWinner=(userWin,userchoice,compchoice)=>
{
	if(userWin)
	{
		console.log("you win");
		msg.style.backgroundColor="green";
		msg.innerText=`You Win!  ${userchoice} bteats ${compchoice}`;
		
		
	}
	else
	{
		console.log("you loss");
		msg.style.backgroundColor="red";
		msg.innerText=`You Loss ${compchoice} bteats  ${userchoice}`;
	}
};
const playGame=(userchoice)=>
{
	console.log("user choice",userchoice);
	const  compchoice=gencompchoice();
	console.log("computer choice",compchoice);
	if(userchoice === compchoice)
	{
	drawGame();
	}
	else{
		let userWin=true;
		if(userchoice==="rock")
		{
			userWin=compchoice==="paper"? false:true;
		}
		else if(userchoice==="paper")
		{
			userWin=compchoice==="scissors"? false:true;
		}
	
	else
			{
			userWin=compchoice==="rock"? false:true;
		}
		showWinner(userWin,userchoice,compchoice);
	}
	
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
	  
    const userChoice = choice.getAttribute("id");  //get id given in html let paper scissor etc.
    playGame(userChoice);
  });
});