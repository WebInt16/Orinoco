// lien des boutons
function purchase(newProduct) {
    console.log('purchase');
    window.location = 'panier.html'

    //Envoi produit dans panier
    let camera = new Product(item.lenses, item.name, item.description, item.imageUrl, item.price);

    //selctionner la lentille
    const selectedValue = document.getElementById("select").value;
        console.log(selectedValue)

    //mettre la lentille dans le panier
    let article = {"name": camera.name, "price": camera.price/100, "id": camera._id, "imageUrl": camera.imageUrl,"lenses": selectedValue, "qty": 1};
    let panier = JSON.parse(localStorage.getItem('keyPanier')) || [];
        panier.push(article);
        console.log('here is the variable');
        console.log(article);
        localStorage.setItem('keyPanier', JSON.stringify(panier));

}


// requette API avec fetch
const params = new URLSearchParams(window.location.search);

//insertion du js dans le html
const middle = document.getElementById('middle');

let item;

fetch("http://localhost:3000/api/cameras/" + params.get('id'))
    .then(response => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })
    .then(item => {
        let camera = new Product( item.lenses, item.name, item.description, item.imageUrl, item.price);
        console.log(camera.lenses);

        //affichage de la carte de chaque photo
        let card =
            `<div class="col mb-4">
                <div class="card">
                    <h5 class="card-title">${camera.name}</h5>
                        <img src="${camera.imageUrl}" class="card-img-top" alt="${camera.name}">
                            <div class="card-body">
                                <select id="select">
                                    <option selected disabled >Optiques</option>
                                </select>
                            </div>
                            
                            <br />
                            <div class="details">
                                <p class="card-text">${camera.description}</p>
                                <p class="card-text">${camera.price / 100}€</p>
                                    <button id="buy" type="button" class="btn btn-primary">Acheter</button>
                            </div>
                </div>
             </div>`;

        middle.innerHTML = card;

        const select = document.getElementById("select");//pointe vers #select dans notre HTML
        for (let i in camera.lenses){ //boucle for pour les lenses
        select.innerHTML += `<option value='${camera.lenses[i]}' selected='selected' > ${camera.lenses[i]}</option>`
        }

        //cliquer sur bouton pour acheter l'objet
        const buy = document.getElementById('buy');

        buy.addEventListener('click', function() {
            purchase(camera);
        })

        item = camera;
        console.log(item);
        });


class Product {
    constructor(lenses, name, description, imageUrl, price) {
        this.lenses = lenses;
        this.name = name;
        this.description = description;
        this.lenses = lenses;
        this.imageUrl = imageUrl;
        this.price = price;
        this.status = 'null';
    }
    buyProduct() {
        this.status = 'buy';
    }
}




