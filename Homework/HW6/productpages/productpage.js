function updatePrice() {
	var unitprice = 0;

	if(glaze = getGlaze()){
		unitprice = Number(glaze.value);
	}
	
	if (unitprice == 0) return;
	var price = 0;

	if(amount = getAmount()){
		price = Number(amount.value) * unitprice;
	}
	
	if (price == 0) return;
	document.getElementById("price-display").innerHTML = "Price: $" + price;
	return price;
}

function getGlaze() {
	var glaze_selector_list = document.getElementById("glaze-selector-list");
	for (let i = 0; i < glaze_selector_list.children.length; i++) {
		var radio = glaze_selector_list.children[i].children[0];
		if (radio.checked == true) {
			return radio;
		}
	}
	return false;
}

function getAmount() {
	var amount_selector_list = document.getElementById("amount-selector-list");
	for (let i = 0; i < amount_selector_list.children.length; i++) {
		var radio = amount_selector_list.children[i].children[0];
		if (radio.checked == true) {
			return radio;
		}
	}
	return false;
}

function addToCart() {
	if(!localStorage.getItem('cart')){
		localStorage.setItem('cart', JSON.stringify([]));
	}
	console.log(localStorage.getItem('cart'));
	curr_cart = JSON.parse(localStorage.getItem('cart'));
	if(!getAmount() || !getGlaze()) return;
	item = {'amount': Number(getAmount().value), 'glaze': getGlaze().getAttribute("kind"), 'price': updatePrice()};
	curr_cart.push(item);
	console.log(curr_cart);
	localStorage.setItem('cart', JSON.stringify(curr_cart));
}
