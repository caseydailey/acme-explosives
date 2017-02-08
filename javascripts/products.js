'use strict';


let getProducts = ((e)=> {

	 let productsArray = [];

	return new Promise((resolve, reject) => {

		let productsRequest = new XMLHttpRequest();

		productsRequest.addEventListener("load", () => {
			
			let productsData = JSON.parse(productsRequest.responseText);
			for (let product in productsData){ var products = productsData[product];}
			products.forEach((product) => productsArray.push(product));

			let productsId = e.target.id;
			let counter = 0;
			let productNames = "";
			gallery.innerHTML = "";
			productsArray.forEach((products)=>{

				if (products.id == productsId) {
				
				
					productNames += `<div class="col-lg-3 card">
				    				<h4>${products.name}</h4>
				    				<img src="${products.image}">
				    				<p>${products.description}</p>
				    				</div>`;

				    	counter++;
				    				
				    	if (counter % 3 === 0) {
				    		var rowCount = 1;
				    			gallery.innerHTML += `<section class="row">${productNames}</section>`;
				    			rowCount ++;
				    			productNames = ""; 
				    		}		
				}
			});


			resolve(productsArray);

			});//end request load event

		productsRequest.addEventListener("error", () => reject("productsRequest failed"));

		productsRequest.open("GET", "../JSON/products.json");
		productsRequest.send();

	}); //end promise


});//end getPoducts


