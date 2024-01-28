let h2=document.querySelector("h2");
	console.dir(h2.innerText);
	h2.innerText=h2.innerText+" from apna college";
let p=document.querySelector("p");
console.dir(p.innerText);
p.innerText=p.innerText+" hi javascrpit";
p.getAttribute("class");
p.classList.add("newcon");

let p1=document.querySelector(".p2");
p1.style.fontSize='80px';
p1.style.color='white';

let divs=document.querySelectorAll(".my");

let ind=1;
for(div of divs)
{
console.dir(div.innerText);
div.innerText=`welcome coders ${ind} `;
ind++;
}

let newbtn=document.createElement("button");
newbtn.innerText="ok";
let body=document.querySelector("body");
newbtn.style.backgroundColor='red';
newbtn.style.color='white';

body.before(newbtn);
btn.onclick = ( ) => {
document.getElementById('p1').style.backgroundColor='red';
document.getElementById('p1').style.color='blue';

console.log("btn was clicked");
}