/*****************************/
/******* CLASS BASICS  *******/
/*****************************/


/**** SETTING UP A CLASS & MODIFYING PROPERTIES ****/

/* 
	The class name is always PascalCase, and it must have a constructor so that objects can be created based on the class. "Instantiation" is a term you should know - it just means to create an instance of a class (an object based on a class). 

	The constructor is where all the property keys are established, and also where arguments can be assigned so that some of those properties are given values at the time of instantiation.
*/

// Who doesn't love a good doughnut? (We'll go with the shorter spelling for coding purposes.)
class Donut {

	constructor(type, shape, glazed) { 
		this.type = type; // cake or yeast
		this.shape = shape; // ring, sphere, twist, bar, hole, etc.
		this.glazed = glazed; // Boolean true or false
		this.filling = null;
		this.powder = null;
		this.icing = null;
		this.toppings = [];
	}

}

/*
	In the constructor above, three properties have been set as arguments. This means you can (and in this case, MUST) instantiate a Donut object with values for those three properties. 

	Let's look at this syntax:	this.property = value
	The 'this.property' means whatever object is created from the class can have that property accessed or changed using dot notation. You'll see examples below. On the right side, the variable 'value' takes its value from whatever is passed in through the constructor arguments upon instantiation, and it can be changed later.
	
	However, the additional properties have to be set separately because they were not included in the constructor arguments and therefore have default values instead. (When you see "null", that's essentially taking the default position of "no value available.")
*/

// EXAMPLE #1
let chocolateGlazedTwist = new Donut("yeast", "twist", true);
console.log(chocolateGlazedTwist); // pretty straightforward

// EXAMPLE #2
let cinnamonOldFashioned = new Donut("cake", "ring", false);
console.log(cinnamonOldFashioned); // notice the given values vs. the default values
cinnamonOldFashioned.powder = "cinnamon sugar"; // another property needs a value
console.log(cinnamonOldFashioned); // notice the new value has been stored

// EXAMPLE #3
let grapeJellyFilled = new Donut("yeast", "sphere", false);
grapeJellyFilled.filling = "grape jelly";
grapeJellyFilled.powder = "powdered sugar";
console.log(grapeJellyFilled);

// EXAMPLE #4
let mapleBaconBar = new Donut("yeast", "bar", true);
mapleBaconBar.icing = "maple vanilla";
mapleBaconBar.toppings = ["candied bacon", "maple sugar bits"];
console.log(mapleBaconBar);

// Oh but wait! There are also chopped pecans on that maple bacon bar. Pure decadence!
mapleBaconBar.toppings.push("pecans"); // because toppings is an array
console.log(mapleBaconBar); // now all three toppings show up

// TODO: What's your favorite type of unbelievably fattening, sugary deliciousness?



/**** OPTIONAL PARAMETERS ****/

/*
	Sometimes it's advantageous to set up a class so that you can instantiate the object with some, but not all, of the parameters. In this case, you can assign default values to those properties within the parameters. Just make sure those are last.
*/

class HouseForSale {

	constructor(type, yearBuilt, listPrice, sqft, bedrooms, bathrooms, garage=false, finishedBasement=false) {
		this.type = type;
		this.yearBuilt = yearBuilt;
		this.listPrice = listPrice;
		this.sqft = sqft;
		this.bedrooms = bedrooms;
		this.bathrooms = bathrooms;
		this.garage = garage; // picks up either default or new value from argument
		this.finishedBasement = finishedBasement; // same
	}
}

// EXAMPLE #1 - notice we are not including the last two properties as arguments
let cottageOnOakDrive = new HouseForSale("single-family", 1942, 132500, 1284, 3, 1.5);
console.log(cottageOnOakDrive); // last two have default values

// EXAMPLE #2 - Here we specify 'true' for garage, but leave out basement
let duplexOnWalnutAvenue = new HouseForSale("multi-family", 1968, 259000, 2972, 5, 3, true);
console.log(duplexOnWalnutAvenue); // garage is true, but basement keeps default

// EXAMPLE #3 - Note that in order to instantiate an object with the basement property being true, we have to assign a value for the garage property even if it is still false. 
let mansionOnMainStreet = new HouseForSale("single-family", 1902, 694000, 4418, 8, 4, false, true);
console.log(mansionOnMainStreet);


// TODO: Pretend you're a realtor. Create 3-4 more houses, some with and some without optional parameters



/**** CLASS METHODS ****/

/* 
	Assigning methods to a class is really beneficial, because you can then call that method on any object instantiated from the class. Remember that a "method" is just a function that belongs to an object, and it can be called using dot notation.

	Methods can be declared inside or outside the constructor. It is generally preferred to keep them outside the constructor to keep the object itself simpler and require less memory.
*/

class Produce {

	constructor(name, category, unit, costPerUnit) {
		this.name = name;
		this.category = category;
		this.unit = unit;
		this.costPerUnit = costPerUnit;
		// Here is a method set within the constructor - notice the way it prints out in the console as part of the object.
		this.describe = function() { 
			console.log(`The ${this.name} is a type of ${this.category} that is currently selling for $${this.costPerUnit} per ${this.unit}.\n`)
		}; 
	}

	// Here is a method set outside the constructor - notice there is no evidence of it when you print the object itself, but you can call it with dot notation all the same. 
	calculateTotal(quantity) {
		let totalCost = quantity * this.costPerUnit; // note the syntax to reference costPerUnit
		let digitsToString = String(Math.floor(totalCost*100)); // remove decimal
		let n = digitsToString.length;
		let totalCostFormatted = "$" + digitsToString.slice(0, n-2) + "." + digitsToString.slice(n-2);
		console.log(`The total cost is ${totalCostFormatted}.\n`);
	}
}

// EXAMPLE #1
let grannySmithApple = new Produce("Granny Smith apple", "fruit", "pound", 0.99);
console.log(grannySmithApple);
grannySmithApple.describe();
grannySmithApple.calculateTotal(3); // 3 pounds

// EXAMPLE #2
let yellowBellPepper = new Produce("yellow bell pepper", "vegetable", "each", 1.12);
console.log(yellowBellPepper);
yellowBellPepper.describe();
yellowBellPepper.calculateTotal(5); // 5 peppers

// TODO: What's going in your dinner salad tonight? Create 3-4 more objects, then call 
// describe() and calculateTotal() for each



/**** TIME TO FLY SOLO ****/

/*
	TODO: Create a class called Instrument to represent musical instruments. Think piano, guitar, hammered dulcimer, flute, digeridoo, harmonica, French horn, etc... lots of possibilities! 

	Give your class the following properties: name, category, and soundsLike. 
	
	Write a method outside the constructor called describe() that incorporates all three properties into a sentence and prints it to the console. Remember the syntax you must use to reference the properties that are inside the constructor.
*/



// TODO: Once your class is complete, un-comment the lines below to test it out.

// let violin = new Instrument("violin", "string", "a whirlwind romance -- and the inevitable heartbreak that follows after");
// violin.describe();

// let tuba = new Instrument("tuba", "brass", "Mr. Snuffleupagus trying to dance");
// tuba.describe();

// let ukelele = new Instrument("ukelele", "string", "Barney and the Teletubbies got drunk and filmed a Hawaiian special together");
// ukelele.describe();

// let bagpipe = new Instrument("bagpipe", "woodwind", "200 third-graders had a recorder recital next to a turbojet engine roaring at full throttle");
// bagpipe.describe();
