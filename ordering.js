let bill = new Map();

function plus(item){
	update(item, true);
}
function minus(item){
	update(item, false);
}
function update(item, add){
	let parent = document.getElementById(item).querySelector(".quantity-selector")
	let num = parent.querySelector(".number");
	num.innerText = (Math.max(0, parseInt(num.innerText) + (1*add?1:-1)));

	let price = parent.querySelector(".price");
	bill.set(item, [num.innerText, parseInt(price.innerText.substring(1)) * parseInt(num.innerText)]);
	calcTotal();
}
function calcTotal(){
	let total = 0;
	for (let [key, value] of bill) {
		total += value[1];
	}
	document.getElementById("total").innerText = "total: $" + total;
}
function updateBill(){
	for (let [item, str] of bill) {
		console.log(key + " is " + value);
	}
}