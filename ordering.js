function plus(item){
	// console.log("plu");
	let label = document.getElementById(item + "Num");
	// console.log(label.innerText);
	label.innerText = (parseInt(label.innerText) + 1);
}
function minus(item){
	let label = document.getElementById(item + "Num");
	label.innerText = (Math.max(0, parseInt(label.innerText) - 1));
}