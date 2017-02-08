'use strict';

let printCards = ((e)=>{
console.log('print wants to print');
	let whichCat = e.target.id;

	var counter = 0;
console.log('productsArray:', productsArray);

		productsArray.forEach( product => {
console.log('forEach wants to run');

			if (product.id = whichCat) {

				console.log('product:', product);
			// cards += `<div class="col-lg-4 col-sm-4 col-xs-6 card">
	  //   					 <h4>${car.year} ${car.make} ${car.model}</h4>
	  //   					 <img class="thumbnail img-responsive" src="../${car.image}">
	  //   					 <p class="description">${car.description}</p>
	  //   					 <p><small>${car.price}</small></p>
	  //   					 </div>`;

	  //   	counter++;
	    				
	  //   	if (counter % 3 === 0) {
	  //   		var rowCount = 1;
	  //   			gallery.innerHTML += `<section class="row">${cards}</section>`;
	  //   			rowCount ++;
	  //   			cards = ""; 
	  //   		}

	    	}//end if

		}); //end forEach
	

});