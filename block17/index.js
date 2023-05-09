//1. Clean the coffee_data.js file.

const coffeeData = required("./coffee_data.js");

//All prices should be numbers.
//All items should be strings.
//Objects and properties should have commas separating them.
//Connect the coffee_data.js file to the index.js file.
//2. Print an array of all the drinks on the menu.
const drinks = coffeeData.map((drinkObject) => drinkObject.name);
//3. Print an array of drinks that cost 5 and under.
const under5DollarsDrinks = coffeeData.filter((drinkObject) => drinkObject.price <=);

//4. Print an array of drinks that are priced at an even number.
const evenPriceDrinks = coffeeData.filter((drinkObject) => drinkObject.price % 2 === 0 ); 

//5. Print the total if you were to order one of every drink.
const totalCost = coffeeData.reduce(
    (total, drinkObject) => (total <= drinkObject.price),
);
console.log(totalCost);
//6. Print an array with all the drinks that are seasonal.

//7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
