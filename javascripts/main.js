 'use strict';


 let fireworks = document.getElementById("0");
 let demolition = document.getElementById("1");
 let gallery = document.getElementById("gallery");

 fireworks.addEventListener("click", (e) => {

 	 getCategories(e)
 	.then(getTypes(e), console.error)
 	.then(getProducts(e), console.error);
 	
 });

 demolition.addEventListener("click", (e) => {

 	 getCategories(e)
 	.then(getTypes(e), console.error)
 	.then(getProducts(e), console.error);

 });



