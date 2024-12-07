let bill = new Map();
const popupOverlay = document.querySelector(".overlay");
const errorPopup = document.querySelector(".errorPopup");
const itemName = document.getElementById("itemName");
const itemAmount = document.getElementById("itemAmount");
const itemPrice = document.getElementById("itemPrice");
const totalText = document.getElementById("total")
const totalPopup = document.querySelector(".total");
let total = 0;
function plus(item){
	update(item, true);
}
function minus(item){
	update(item, false);
}
function update(item, add){
	errorPopup.style.visibility = 'hidden';
	let parent = document.getElementById(item).querySelector(".quantity-selector")
	let num = parent.querySelector(".number");
	num.innerText = (Math.max(0, parseInt(num.innerText) + (add?1:-1)));
	
	item = item.replace(/([A-Z])/g, ' $1').trim()
	item = item.charAt(0).toUpperCase() + item.substring(1);
	let price = parent.querySelector(".price");
	total += ((add?1:-1)*price.innerText.substring(1))
	totalText.innerText = "total: $" + total;
	bill.set(item, [num.innerText, parseInt(price.innerText.substring(1)) * parseInt(num.innerText)]);
}
function calcTotal(){
	total = 0;
	for (let [key, value] of bill) {
		total += value[1];
	}
	document.getElementById("total").innerText = "total: $" + total;
}

function openPopup() {
	if(bill.size == 0){
		errorPopup.style.visibility = errorPopup.style.visibility == 'visible'?'hidden':  'visible';
		return
	}
	errorPopup.style.visibility = 'hidden';
	popupOverlay.style.visibility = 'visible';
	totalPopup.innerText = "Total: $" + total;
	itemName.innerHTML = "";
	itemAmount.innerHTML = "";
	itemPrice.innerHTML = "";
	for (let [key, value] of bill) {
		itemName.innerHTML += '<li>'+ key +'</li>';
		itemAmount.innerHTML += '<li>x'+ value[0] +'</li>';
		itemPrice.innerHTML += '<li>$'+ value[1]+'</li>';
	}
}