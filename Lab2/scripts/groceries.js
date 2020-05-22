	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "parsley",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},	{
		name: "spinach",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "lettuce",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.99
	},
	{
		name: "avocado",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.99
	},
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.99
	},
	{
		name: "cucumber",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.99
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 4.99
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 4.99
	},
	{
		name: "pork",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 6.99
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 9.99
	},
	{
		name: "biscuits",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 2.99
	},
	{
		name: "beer",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 19.99
	},
	{
		name: "donuts",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 12.00
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organicProduct) {
	let product_names = [];
	console.log(organicProduct, restriction);
	for (let i=0; i<prods.length; i+=1) {
		var product = { name: null, price: null };

		if (organicProduct == true && prods[i].organic == true){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product.name = prods[i].name;
				product.price = prods[i].price;
				product_names.push(product);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product.name = prods[i].name;
				product.price = prods[i].price;
				product_names.push(product);
			}
			else if ((restriction == "VegetarianANDGlutenFree") && (prods[i].glutenFree == true && prods[i].vegetarian == true)){
				product.name = prods[i].name;
				product.price = prods[i].price;
				product_names.push(product);
			 }
			else if (restriction == "None"){
				product.name = prods[i].name;
				product.price = prods[i].price;
				product_names.push(product);
			}
		}
		else if (organicProduct == false) {
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product.name = prods[i].name;
				product.price = prods[i].price;
				product_names.push(product);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product.name = prods[i].name;
				product.price = prods[i].price;
				product_names.push(product);
			}
			else if ((restriction == "VegetarianANDGlutenFree") && (prods[i].glutenFree == true && prods[i].vegetarian == true)){
				product.name = prods[i].name;
				product.price = prods[i].price;
				product_names.push(product);
			 }
			else if (restriction == "None"){
				product.name = prods[i].name;
				product.price = prods[i].price;
				product_names.push(product);
			}
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
