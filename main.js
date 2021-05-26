menu_list_array = ["Veg Margherita Pizza", "Cheese Pizza", "Hawaiian Pizza", "Philly Cheese Steak Pizza", "Pepperoni Pizza", "Vegetable Pizza", "New York Style Pizza", "Thick Crusted Pizza"
];

function getmenu() {
    menu_list_array.sort();
    var htmldata = "";
    for (i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + (i + 1) + ". " + menu_list_array[i] + "<br>" + "<br>";
    }
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    var value = "";
    value = value + '<div class="card">' + "<center>" + '<img src="images/pizzaImg.png">' + `<p> ${item} </p>` + "</center>" + "</div>";
    var current = document.getElementById("list_of_pizzas").innerHTML;
    document.getElementById("list_of_pizzas").innerHTML = current + value;
}

function add_top() {
    var topping = document.getElementById("add_item").value;
    menu_list_array.push(topping);
    menu_list_array.sort();
}