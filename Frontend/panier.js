//access card page

function order(){
    console.log('order');
    window.location = 'card.html'
}


let panier = JSON.parse(localStorage.getItem('keyPanier'));
console.log(panier);

for (const item of panier) {


    let cartPanier =
        `  <div class=".table-responsive{-sm|-md|-lg|-xl}">
            <table id="tableau" class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Lenses</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Suppression</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td class="name">${item.name}</td>
                  <td class="description">${item.description}</td>
                  <td class="lenses">${item.lenses}</td>
                  <td class="price">€${item.price /100}</td>
                  <td class="quantity">${item.quantity}</td>
                  <td><button class="btn btn-danger" type="button">Effacer</button></td>
                </tr>
              </tbody>
            </table>
           <br><label>Prix du panier total</label> : <label id = "prixTotal"></label>
              <label id = "nbrLignes" hidden>0</label>
              <br>
                <button id="add" type="button" class="btn btn-primary onclick="order()" >Payez</button>
        </div>`;
    middle.innerHTML += cartPanier;

  
}

                  // <input class="cart-quantity" type="number" value="1"></td>


let removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', function(event){
        console.log('cliked')
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()

      })
    }

// function updateCartTotal(){
//   var updateItemContainer = document.getElementsByClassName('.table-responsive')[0]
//   var table = cartItemContainer.getElementsByClassName('table')
//   for (var i = 0; i < table.length; i++) {
//   var table = table[i]
//   var priceElement = table.getElementsByClassName('cartprice')[0]
//   var quantityElement = table.getElementsByClassName('cart-quantity-input')[0]
//   console.log(priceElement, quantityElement)
// }
let add = document.getElementById('add');
console.log('add');
add.addEventListener('click', function(){
order(item);
});



// getPanier()

// class panier {
//     constructor(number, name, description, price, quantity) {
//         this.number = number;
//         this.name = name;
//         this.description = description;
//         this.price = price;
//         this.quantity = quantity;
//         // this.status = 'uncompleted';


//     }
//     placeOrders() {
//         this.status = 'completed';
//     }
// }