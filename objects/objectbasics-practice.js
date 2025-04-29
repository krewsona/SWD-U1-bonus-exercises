/*****************************/
/******* OBJECT BASICS *******/
/*****************************/

/*
	In JavaScript, objects hold key/value pairs and are useful for structuring multiple properties that belong together. Here are a few examples of how to create them, add/modify new properties, and how to access the data inside the objects. 
*/


/**** CREATING OBJECTS ****/

/* Objects are enclosed in fancy braces {} and the key/value pairs are separated by commas. Keys do not have to be in quotes in JS objects, but the values must have proper syntax for their data types. */

// EXAMPLE: This is my car. It's in pretty decent shape, and gets me where I need to go.
let car1 = {
	year: 2007,
	make: "Ford",
	model: "Escape",
	style: "SUV",
	color: "red"
}

// TRY IT: Create an object representing your own car (past, present, or future!)

let myCar = {
	year: 2014, 
	make: "Honda",
	model: "CRV",
	style: "hatchback",
	color: "gray",
}


/**** ACCESSING PROPERTIES OF OBJECTS ****/

/* 
	There are two ways to access object properties: bracket notation (which you're familiar with from strings and arrays) and dot notation (this might be new to you!) 

	IMPORTANT: With bracket notation, the key must be put in quotes.
*/

let newDrill = {
	brand: "Dewalt",
	cordless: true,
	battery: "20V"
}

let oldDrill = {
	brand: "Black & Decker",
	cordless: false,
	battery: null // no battery
}

// EXAMPLE: Use bracket notation to print the brand of oldDrill.
console.log(`In 1999, my dad gave me his old drill. It was a ${oldDrill["brand"]}.`); // note key is in quotes

// EXAMPLE: Use dot notation to print the brand of newDrill.
console.log(`After 20 years I finally got a new drill. It's a ${newDrill.brand}.`);

// TRY IT! Use bracket notation to print whether oldDrill is cordless.
console.log(`Is the old drill cordless? ${oldDrill["cordless"]}`);

// TRY IT! Use dot notation to print the voltage of newDrill's battery.
console.log(`What kind of battery does the new drill have? It is a ${newDrill.battery}`);



/**** ADDING & MODIFYING OBJECT PROPERTIES ****/

let city = {
	name: "St. Louis",
	state: "MO",
	yearFounded: 1822, // Wrong! we'll fix it...
	classification: "city",
	cityPopulation: 319294, // Misleading! we'll clarify...
}

/* 
	You can use either bracket notation or dot notation to add/modify a property.
*/

// EXAMPLE: While St. Louis was incorporated in 1822, it was actually founded in 1764. Use bracket notation to change this value and print the resulting object.
city["yearFounded"] = 1764;
console.log(city);

// EXAMPLE: Because St. Louis city is not actually part of St. Louis county, statistically its population is much lower than that of the true metro area. Let's use dot notation to add a new property that clarifies.
city.metroPopulation = 2807338;
console.log(city);

// TRY IT! Use bracket notation to change the name of the state so that it is spelled out instead of being a two-letter abbreviation. Print the resulting object.
city["state"] = "Missouri";
console.log(city);

// TRY IT! Use dot notation to add a new property called "claimToFame", with the value being the Gateway Arch, of course! Print the resulting object.
city.claimToFame = "Gateway Arch";
console.log(city);