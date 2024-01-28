let boxes=document.querySelectorAll(".box");
let newbtn=document.querySelector("#newbtn");
let btn=document.querySelector("#btn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turn = true;
const arrs =[ 
[0,1,2],
[0,4,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetGame=()=>{
	turn=true;
	enableBoxes();
	msgcontainer.classList.add("hide");
};

boxes.forEach((box) =>{
	box.addEventListener("click",() =>{
		console.log("button click");
		//box.innerText="abc";
		if(turn===true)//player o
		{
			box.innerText="O";
			turn=false;
		}
		else{
			box.innerText="X";
			turn=true;
		} 
		box.disabled= true;
		checkwinner();
	});
});
const disablebox = ()=>
{
	for(let box of boxes)
	{
		box.disabled=true;
	}
};
const enableBoxes = ()=>
{
	for(let box of boxes)
	{
		box.disabled=false;
		box.innerText="";
	}
};		
const winner=(winnershow) =>{
	msg.innerText = `CONGRATULATIONS WINNER ${winnershow}`;
	
	msgcontainer.classList.remove("hide");
	 disablebox();
	
};
const checkwinner= () =>{
	for(let arr of arrs)
	{
	//console.log(arr[0],arr[1],arr[2]);
	//console.log(boxes[arr[0]].innerText,boxes[arr[1]].innerText,boxes[arr[2]].innerText);	
	let pos1=boxes[arr[0]].innerText;
	let pos2=boxes[arr[4]].innerText;
	let pos3=boxes[arr[8]].innerText;
	if(pos1!=""&&pos2!=""&&pos3!="")
	{
		if(pos1===pos2&&pos2===pos3)
		{
			console.log("winner",pos1);
			winner(pos1);
		}
	}
	
	}
	
};
newbtn.addEventListener("click", resetGame);
btn.addEventListener("click", resetGame);
 