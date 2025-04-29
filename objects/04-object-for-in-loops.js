/*************************************/
/****** OBJECTS: FOR...IN LOOPS ******/
/*************************************/

/*
	Because objects store values by key names and not by index (like arrays do), a regular for loop doesn't work. If you want to iterate through the properties of an object, you must use a for...in loop. 

	Also, it's sometimes necessary to combine both for loops and for...in loops if you are working with objects and arrays together. Let's investigate!
*/


/**** THE FOR...IN LOOP ****/

/*
	Let's talk about the syntax of a for...in loop. It's actually not that different overall from a for loop, except you're not declaring an iterator (i) and telling it stop/start/increment values. Instead, you declare a generic variable to stand in for each key name. This is great, because you may not even know what the key names are, but you can loop through anyway.

	for (let key in objectName) {
		// do stuff with keys and values
	}

	To access a key inside the loop, just use the variable key

	To access a value inside the loop, use the syntax objectName[key] 
	(IMPORTANT: dot notation does not work inside a for...in loop!)
*/

// EXAMPLE: Let's set up a basic object with a few properties and then loop through them.
let lunchBox = {
	main: "a ham and swiss sandwich",
	side1: "black cherry yogurt",
	side2: "carrot sticks",
	side3: "pretzels"
}; // remember that objects should have semicolons after them!

// We'll set up the loop with a meaningful variable for the keys (not just 'key')
for (let foodItem in lunchBox) {
	console.log(`I looked in my lunch box and found ${lunchBox[foodItem]}!`);
}

// What if we just need to find the key name for a particular item we think might be in there somewhere? Let's write a function to look for some food, and return the key.

function searchLunchBox(item) {
	let keyName; 
	// set up for...in loop
	for (let foodItem in lunchBox) {
		// Use a conditional to look for the item passed in
		if (lunchBox[foodItem].includes(item)) {
			console.log(`\nI found some ${lunchBox[foodItem]}!`);
			keyName = foodItem;
			return keyName; // we can stop function now that we found it
		}		
	}
	// If it was never found we will print something to say so
	console.log(`\nSorry, ${item} was never found.`);
	return null; // Instead of returning an undefined variable
}

let yogurtKey = searchLunchBox("yogurt"); // expect "side1"
console.log(yogurtKey);

let appleKey = searchLunchBox("apple"); // expect null
console.log(appleKey);

console.log(""); // skip a line in console
 
// TODO: Use what you've learned about how to access keys and values to loop through the object and print only values which belong to food items that are sides. No need to write this one as a function, just do the loop. Hint 1: you need to check the key names, not the values! Hint 2: Even though they don't look like it in the object, keys are stored as strings.

for (let foodItem in lunchBox) {
	if (foodItem.includes("side")) {
		console.log(lunchBox[foodItem]);
	}
}

/**** LOOPING THROUGH OBJECTS WITH ARRAYS AS VALUES ****/

/*
	While objects can certainly just hold things like strings and numbers as values, sometimes they hold other things. Let's look at how to loop through the object AND loop through an array that is inside an object.
*/

// EXAMPLE: Here's an object that has arrays as values.
let pantry = {
	bottled: ["peanut butter", "canola oil", "extra BBQ sauce"],
	canned: ["black-eyed peas", "cuban black beans", "marinara sauce", "coconut cream"],
	boxed: ["rotini pasta", "cereal", "oatmeal", "crackers", "stuffing mix"],
	bagged: ["15-bean soup mix", "jasmine rice"]
};

// Let's print a formatted list of each property and its values. We always start with the outside and work our way in. So let's set up our for...in loop first. 
for (let packageType in pantry) {
	console.log(`\n${packageType.toUpperCase()}`);
	console.log("-".repeat(packageType.length));
	// Now we will set up a regular for loop inside to handle printing each element of each array.
	for (let foodItem of packageType) {
		console.log(foodItem);
	}
}
// Run the program to see the results in the console. Nicely formatted, right? Notice how each array had a different number of items, but we handled that by taking the length of each array, as pantry[packageType] is the correct way to refer to the value of each property.

console.log(""); // skip a line in console

// TODO: Write a function that takes in an index number, prints "Items at index (x):" and then prints the element at that index of each array as you loop through the object. Use the escape character \t to indent each item for that index. If the array doesn't have anything at that index, it should be skipped without throwing an error. (Note: you don't need nested loops for this one.)
function printItemsAtIndex(index) { //defines function
	console.log(`Items at index ${index}:`); //print title line

	for (let packageType in pantry) { //starting our for...in loop that goes thorugh each key in the pantry
		if (pantry[packageType][index]) { //checks if current array has an item in the position you passed in
			console.log(`\t${pantry[packageType][index]}`); //if there is something at that index, this prints
		}
	}
}


// TODO: Call the function above at 2 or 3 different index numbers and check to see the results are what you expect.
printItemsAtIndex(2);
printItemsAtIndex(4);


// TODO: Now write a function that takes a package type as a parameter and then prints all the items of the array only for that package type. This time, print "Items that are (type):" and then put a "- " in front of each item from that array. (Hint: if you already know the name of the package type, you don't need a for...in loop to check every property!)
function printItemsByType(packageType) { //defining function
	console.log(`Items that are ${packageType}`); //prints title
	let items = pantry[packageType];
	for (let item of items) { //grabbing each element one by one from the array 
		console.log(`- ${item}`);
	}
}


// TODO: Call the function for a couple of the key names in the object and check the results. Remember that JavaScript stores object keys as strings, so you'll need to pass them in that way.
printItemsByType("bagged");
printItemsByType("bottled");

/*
	Great job!
*/


