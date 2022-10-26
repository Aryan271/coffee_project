class Coffee {
  constructor(coffee, addon, price, index) {
    this.product = `${coffee} ${addon}`;
    this.price = price;
    this.index = index;
  }
}

class Bill {
  constructor(product, qty, price) {
    this.product = product;
    this.qty = qty;
    this.price = price;
  }
}

let coffee = ["Espresso", "Cappucino", "Latte"];
let addon = ["Milk", "Cream", "Latte"];
let price = [60, 75, 100, 80, 90, 125, 100, 125, 150];
let k = 0;

let allProducts = [];

for (let i = 0; i < coffee.length; i++) {
  for (let j = 0; j < addon.length; j++) {
    let curProduct = new Coffee(coffee[i], addon[j], price[k++], k);
    allProducts.push(curProduct);
  }
}

let productsList = document.getElementById("productsTable");

class UI {
  static displayCoffee() {
    allProducts.forEach((item) => {
      let row = productsList.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = `${item.index}`;
      cell2.innerHTML = `${item.product}`;
      cell3.innerHTML = `${item.price}`;
    });
  }
}

UI.displayCoffee();

let orderbtn = document.getElementById("orderbtn");
let billArea = document.getElementById("displayBill");

function order() {
  billArea.innerHTML = "";
  let orderBill = [];
  let totPrice = 0;
  let ul = document.createElement("ul");

  let input = prompt("Please enter product no. or exit", "1");
  while (input !== "") {
    if (input === "exit") {
      let h2 = document.createElement("h2");
      h2.innerHTML = "Your Bill";
      billArea.appendChild(h2);
      billArea.appendChild(ul);

      let h3 = document.createElement("h3");
      h3.innerHTML = `Your total amt is ${totPrice}`;
      billArea.appendChild(h3);

      break;
    } else {
      let idx = parseInt(input);
      let qty = prompt("Please enter quantity", "1");
      let product = allProducts[idx - 1].product;
      let price = allProducts[idx - 1].price * parseInt(qty);

      let curItem = new Bill(product, qty, price);
      orderBill.push(curItem);

      let li = document.createElement("li");
      li.innerHTML = `${product}  ${qty} ${price}`;
      ul.appendChild(li);

      totPrice += price;

      input = prompt("Please enter product no. or exit", "1");
    }
  }
}
