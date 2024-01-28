// promise chain
/*function asycFunc()
{

//const myPromise = () => {
	
 return new Promise((resolve, reject) => {
	 //console.log("i am promise");
	setTimeout(() => { 
//console.log("i am promise 1");
//reject("unsuccess");
resolve("success");
	},4000);
});

}
function asycFunc2()
{

//const myPromise = () => {
	
 return new Promise((resolve, reject) => {
	 //console.log("i am promise");
	setTimeout(() => { 
//console.log("i am promise 2");
//reject("unsuccess");
resolve("success");
	},4000);
});
}
console.log("fetch promise 1");
let promises= asycFunc();

	promises.then((res) => {
	console.log("promise 1  fulfill",res);
	console.log("fetch promise 2");
	let p2=asycFunc2();
	p2.then((res) => {
	console.log("promise 2 fulfill",res);
});
	});

*/
//CALLBACK HELL
/*function getData(dataId,getNextData)
{
setTimeout(()=>
{
console.log("data",dataId);
if(getNextData)
{
getNextData();
}
},2000);
}
CALLBACK HELL func
getData(1,()=>
{
getData(2,()=>
{
getData(3,()=>
{getData(4);
});
});
});
// promise chain to red Hell prob
function getData(dataId)
{
return new Promise((resolve,reject)=>{
setTimeout(()=>
{
console.log("data",dataId);
resolve("success");
},4000);
});
}
getData(1).then((res)=>
{
	console.log(res);
	getData(2).then((res)=>{
		console.log(res);
	});
});

// asn await api
function api(){
	return new Promise((resolve,reject)=>
	{
		setTimeout(()=>
		{
			console.log("weather data");
			resolve(200);
		},2000);
	});
}
async function hello(){
	//console.log("hello");
	await api();
	await api();
	
}

//asnc await
 function getData(dataId)
{
return new Promise((resolve,reject)=>{
setTimeout(()=>
{
console.log("data",dataId);
resolve("success");
},2000);
});
}
//IIFE imediately execute  
(async function getAll(){
	console.log("fetch promise 1");
	await getData(1);
	console.log("fetch promise 2");
	await getData(2);
})();
	 
*/
let arr=[1,2,3,4,5];
let op =arr.reduce((preval,currval)=>{
return preval+currval;

});
console.log(op);