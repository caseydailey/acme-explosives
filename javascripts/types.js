'use strict';


let getTypes = ((e)=> {

	let typesArray = [];

	return new Promise((resolve, reject) => {

		let typesRequest = new XMLHttpRequest();

		typesRequest.addEventListener("load", () => {
			
			let typesData = JSON.parse(typesRequest.responseText);
			for (let type in typesData){ var types = typesData[type]};
			types.forEach((type) => typesArray.push(type));
			resolve();
		});//end request load event

		typesRequest.addEventListener("error", () => reject("typesRequest failed"));

		typesRequest.open("GET", "../JSON/types.json");
		typesRequest.send();

	}); //end promise



});//end getTypes