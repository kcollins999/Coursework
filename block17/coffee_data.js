//Prompt 1: Clean the data files
// checklist: 1. all prices should be numbers
// 2. all items should be strings
// 3. objects and propertiesz should have comas separating them
// 4. connect the coffe_data.js and index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: "8",
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    }
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: "9",
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: "6",
        seasonal: false,
    }
    {
        name: "americano",
        price: 7,
        seasonal: false,
    }
    {
        name: "iced coffee",
        price: "6",
        seasonal: false,
    },
    {
        name: "frappe",
        price: "8",
        seasonal: false,
    }
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]

coffeeObject.price = Number(coffeeObject.price);
const cleanedNumbersData = coffeeMenu.map((coffeeObject) => {
    coffeeObject.price = Number(coffeeObject.price);
    return coffeeObject;
})


module.exports = cleanedNumbersData;