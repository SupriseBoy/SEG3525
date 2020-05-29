	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

function onClickCategory(id, slct) {
	var s1 = document.getElementById(id);
	var s2 = document.getElementById(slct);

	var checkedOrganicProduct = document.getElementById("OrganicProduct");
	var checkedVegeterian = document.getElementById("Vegeterian");
	var checkedGlutenFree = document.getElementById("GlutenFree");
	
	if(Number.isInteger(id)){
		populateListProduct(s2, categorie, checkedOrganicProduct.checked, checkedVegeterian.checked, checkedGlutenFree.checked);
	}else {
		for (let i=0; i<categorie.length; i++) {
			if (categorie[i].name === id){
				if(categorie[i].selected == false){
					s1.style.color = "green";
					categorie[i].selected = true;
					populateListProduct(s2, categorie, checkedOrganicProduct.checked, checkedVegeterian.checked, checkedGlutenFree.checked);
					break;
				}else {
					s1.style.color = "black";
					categorie[i].selected = false;
					populateListProduct(s2, categorie, checkedOrganicProduct.checked, checkedVegeterian.checked, checkedGlutenFree.checked);
					break;
				}
			}
		}
	}
}

 function populateListProduct(s2, arrayCategorie, checkedOrganicProduct, checkedVegeterian, checkedGlutenFree){
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(products, arrayCategorie, checkedOrganicProduct, checkedVegeterian, checkedGlutenFree);

	// Sort Array
	optionArray.sort(function(a, b) {
		if (a.price < b.price) {
			return -1;
		}
		if (a.price > b.price) {
			return 1;
		}
	});

	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		var productImage = optionArray[i].img;

		var img = document.createElement('img');
		img.src = productImage;
		img.style.width = "50px";
		img.style.height = "50px";
		s2.appendChild(img);

		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " " + productPrice + " $"));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
 }

var categorie = [
	{
		name: "Breads",
		selected: false
	},
	{
		name: "Meats",
		selected: false
	},
	{
		name: "Vegtables",
		selected: false
	},
	{
		name: "Fruits",
		selected: false
	},
	{
		name: "Dairy",
		selected: false
	},
];


var products = [
	{
		name: "parsley",
		img: "icon/parsley.png",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		category: "Vegtables"
	},	{
		name: "spinach",
		img: "icon/spinach.png",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		category: "Vegtables"
	},
	{
		name: "lettuce",
		img: "icon/lettuce.png",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.99,
		category: "Vegtables"
	},
	{
		name: "avocado",
		img: "icon/avocado.png",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.99,
		category: "Vegtables"
	},
	{
		name: "brocoli",
		img: "icon/brocoli.png",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.99,
		category: "Vegtables"
	},
	{
		name: "cucumber",
		img: "icon/cucumber.png",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.99,
		category: "Vegtables"
	},
	{
		name: "tomato",
		img: "icon/tomato.png",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.99,
		category: "Vegtables"
	},
	{
		name: "bread",
		img: "icon/bread.png",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		category: "Breads"
	},
	{
		name: "beef",
		img: "icon/beef.png",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 4.99,
		category: "Meats"
	},
	{
		name: "chicken",
		img: "icon/chicken.png",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 4.99,
		category: "Meats"
	},
	{
		name: "pork",
		img: "icon/pork.png",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 6.99,
		category: "Meats"
	},
	{
		name: "salmon",
		img: "icon/salmon.png",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 9.99,
		category: "Meats"
	},
	{
		name: "banana",
		img: "icon/banana.png",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 0.99,
		category: "Fruits"
	},
	{
		name: "milk",
		img: "icon/milk.png",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 4.99,
		category: "Dairy"
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, arrayCategorie, checkedOrganicProduct, checkedVegeterian, checkedGlutenFree) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		var product = { name: null, price: null };
		
		for (let x = 0; x < arrayCategorie.length; x++){
			if(arrayCategorie[x].selected == true) {
				if(prods[i].category == arrayCategorie[x].name) {
					if(checkedOrganicProduct == false && checkedVegeterian == false && checkedGlutenFree == false){
						product.name = prods[i].name;
						product.price = prods[i].price;
						product.img = prods[i].img
						product_names.push(product);
					}else {
						if (checkedOrganicProduct == true && checkedVegeterian == true && checkedGlutenFree == true){
							if(prods[i].organic == true && prods[i].vegetarian == true && prods[i].glutenFree == true) {
								product.name = prods[i].name;
								product.price = prods[i].price;
								product.img = prods[i].img;
								product_names.push(product);
							}
						} else if (checkedOrganicProduct == true && checkedVegeterian == true) {
							if(prods[i].organic == true && prods[i].vegetarian == true) {
								product.name = prods[i].name;
								product.price = prods[i].price;
								product.img = prods[i].img;
								product_names.push(product);
							}
						} else if (checkedVegeterian == true && checkedGlutenFree == true) {
							if(prods[i].vegetarian == true && prods[i].glutenFree == true) {
								product.name = prods[i].name;
								product.price = prods[i].price;
								product.img = prods[i].img;
								product_names.push(product);
							}
						} else if (checkedGlutenFree == true && checkedOrganicProduct == true) {
							if(prods[i].glutenFree == true && prods[i].organic == true) {
								product.name = prods[i].name;
								product.price = prods[i].price;
								product.img = prods[i].img;g
								product_names.push(product);
							}
						} else if (checkedOrganicProduct == true) {
							if(prods[i].organic == true) {
								product.name = prods[i].name;
								product.price = prods[i].price;
								product.img = prods[i].img;
								product_names.push(product);
							}
						} else if (checkedVegeterian == true) {
							if(prods[i].vegetarian == true) {
								product.name = prods[i].name;
								product.price = prods[i].price;
								product.img = prods[i].img;
								product_names.push(product);
							}
						} else if (checkedGlutenFree == true) {
							if(prods[i].glutenFree == true) {
								product.name = prods[i].name;
								product.price = prods[i].price;
								product.img = prods[i].img;
								product_names.push(product);
							}
						}
					}
				}
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
