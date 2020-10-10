
//requette API
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
        console.log(response[0].imageUrl);
       	let imgList = [];
        for (var i = response.length - 1; i >= 0; i--) {
        	imgList.push(`<img src="${response[i].imageUrl}" width="200">`);
        	console.log(imgList);

        }
        document.getElementById("pics").innerHTML = imgList;

    }

let card = {
	
}

// main.innerHTML+= <h1>{$item.name}</h1>;
};
request.open("GET", "http://localhost:3000/api/cameras");
request.send();


// console.log(document.querySelector('all'));
showTotalInPanier();