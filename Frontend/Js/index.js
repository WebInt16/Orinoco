function article(){
    console.log('article');
    window.location = 'produits.html'
}

//requette API avec fetch

const middle = document.getElementById('middle');

fetch("http://localhost:3000/api/cameras")
    .then(response => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })


.then(data => {
    console.log(data);
    for (const item of data) {
        let prix = item.price / 100;
        console.log(prix)
        let card =
            `<div class="card" style="width: 25rem;">
                 <h5 class="card-title">${item.name}</h5>
                	  <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}">
                	  <div class="card-body">
                    	    <p class="card-text">${item.description}</p>
                    	    <p class="card-text">${prix} €</p>
                                <a href="./Frontend/produits.html?id=${item._id}"<button id="article" type="button" class="btn btn-primary" onclick = "article()">Voir l'article</button></a>
                	  </div>
             </div>`;
        middle.innerHTML += card;
        console.log(item);
        }
        const article = document.getElementById('article');
        console.log(article);
    })
    .catch(err => console.log(`Erreur message: ${err}`));