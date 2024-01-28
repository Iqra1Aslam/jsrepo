/*const URL= "https://cat-fact.herokuapp.com/facts";
const pra=document.querySelector("#pra");
let btn=document.querySelector("#btn");

const getFact= async ()=>
{
	
     console.log("getting data    ");
	 let promise=await fetch(URL);
	  let data=await promise.json();
	  console.log(data[1].text);
	   pra.innerText = data[2].text;
}
btn.addEventListener("click",getFact);
*/
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");        //select all from to options
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {         //capture all contries
    let newOption = document.createElement("option");	// new options create in another js
	//console.log(currCode);
    newOption.innerText = currCode;
    newOption.value = currCode;
   if (select.name === "from" && currCode === "USD") {
	   
      newOption.selected = "selected";	
	  // new option select
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption); 
  }
 
  select.addEventListener("change", (evt) => {
	  
    updateFlag(evt.target); 					//change event click option 
  });
}
const updateFlag = (element) => {
  let currCode = element.value;
 // console.log(element.value);
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;   //new img src
  let img = element.parentElement.querySelector("img");          //html img get
  img.src = newSrc;
};
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
   updateExchangeRate();
   
});
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  console.log(amount.value);
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  
  let response = await fetch(URL);
  
  let data = await response.json(); 
console.log(data);  //data pass
  let rate = data[toCurr.value.toLowerCase()];            //to convert curr
  let finalAmount = amtVal * rate;								
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};
 