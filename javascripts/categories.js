'use strict';


let getCategories = ((e)=> {

	 let categoriesArray = [];

	return new Promise((resolve, reject) => {

		let catRequest = new XMLHttpRequest();

		catRequest.addEventListener("load", () => {

			let catData = JSON.parse(catRequest.responseText);
			for (let cat in catData){ var categories = catData[cat];}
			categories.forEach((cat) => categoriesArray.push(cat));

			let categoryId = e.target.id;
			let jumbotron = document.getElementById("jumbotron");
			jumbotron.innerHMTL = "";

			categoriesArray.forEach((category)=>{
				if (category.id == categoryId) {
				jumbotron.innerHTML = `<h1>Here's the ${category.name}!</h1>`;
				}
			});

			resolve();
		});//end request load event

		catRequest.addEventListener("error", () => reject("catRequest failed"));

		catRequest.open("GET", "../JSON/categories.json");
		catRequest.send();

	}); //end promise



});//end getCategories