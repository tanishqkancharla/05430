function updatePrice() {
	var amount_selector_list = document.getElementById("amount-selector-list");
	var glaze_selector_list = document.getElementById("glaze-selector-list");
	var unitprice = 0;
	for (let i = 0; i < glaze_selector_list.children.length; i++) {
		var radio = glaze_selector_list.children[i].children[0];
		if (radio.checked == true) {
			unitprice = Number(radio.value);
		}
	}
	if (unitprice == 0) return;
	var price = 0;
	for (let i = 0; i < amount_selector_list.children.length; i++) {
		var radio = amount_selector_list.children[i].children[0];
		if (radio.checked == true) {
			price = Number(radio.value) * unitprice;
		}
	}
	if (price == 0) return;
	document.getElementById("price-display").innerHTML = "Price: $" + price;
}

function addToCart() {
	
}
