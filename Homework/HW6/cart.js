window.onload = create_cart;

function create_cart(){
    table = document.getElementById("cart-table").children[0]
    cart = JSON.parse(localStorage.getItem('cart'));
    let row;
    let total_amount = 0;
    let total_price = 0;
    for (cart_item in cart){
        row = document.createElement("tr");
        row.innerHTML = "<th>"+cart[cart_item]["glaze"]+" donut</th>"+
            "<th>"+cart[cart_item]["amount"]+"</th>"+
            "<th>"+cart[cart_item]["price"]+"</th>";
        table.appendChild(row);
        total_amount += Number(cart[cart_item]["amount"]);
        total_price += Number(cart[cart_item]["price"]);
    }
    row = document.createElement("tr");
    row.innerHTML = "<th style='font-style:italic'>Totals</th>"+
        "<th style='font-style:italic'>"+total_amount+"</th>"+
        "<th style='font-style:italic'>"+total_price+"</th>";
    table.appendChild(row);

}