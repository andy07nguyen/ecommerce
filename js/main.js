//Constructor Object

function cupcakes(name, quantity, cost, image) {
	this.name = name
	this.quantity = quantity
	this.cost = cost
	this.image = image
}

var cupcake0 = new cupcakes("Red Velvet", 20, 2.00, "img/redvelvet.png")
var cupcake1 = new cupcakes("Vanilla", 20, 2.00, "img/vanilla.png")
var cupcake2 = new cupcakes("Chocolate", 20, 2.00, "img/chocolate.png")
var cupcake3 = new cupcakes("Caramel Apple", 20, 2.00, "img/caramelapplee.png")
var cupcake4 = new cupcakes("Maple Bacon", 20, 2.00, "img/maplebaconn.png")
var cupcake5 = new cupcakes("Toasted Marsh", 20, 2.00, "img/toastedmarshmalloww.png")

var cupcakeArray = [cupcake0, cupcake1, cupcake2, cupcake3, cupcake4, cupcake5]

/* Test
console.log(cupcakeArray)
*/

for(var i = 0; i < cupcakeArray.length; i++) {
	var cupName = document.createTextNode(cupcakeArray[i].name)
	var cupQuantity = document.createTextNode("Available: " + cupcakeArray[i].quantity)
	var cupCost = document.createTextNode("Cost: $" + cupcakeArray[i].cost + ".00 ea.")
	var cupButton = document.createTextNode("Add to Cart")
	var cupImage = cupcakeArray[i].image


	var newCol = document.createElement("div")
	var newDiv = document.createElement("div")
	var newH3 = document.createElement("h3")
	var nameH3 = document.createElement("h3")
	var quantityH4 = document.createElement("h4")
	var costH4 = document.createElement("h4")
	var addToCart = document.createElement("button")
	var image = document.createElement("img")


	nameH3.appendChild(cupName)
	quantityH4.appendChild(cupQuantity)
	costH4.appendChild(cupCost)
	addToCart.appendChild(cupButton)

	addToCart.className = "btn btn-primary btn-lg"
	
	image.src = cupImage
	image.className = "img-responsive"


	newCol.className = "col-sm-3"
	newDiv.className = "cupcake name" + i + " thumbnail"
	newDiv.appendChild(nameH3)
	newDiv.appendChild(image)
	newDiv.appendChild(quantityH4)
	newDiv.appendChild(costH4)
	newDiv.appendChild(addToCart)
	newCol.appendChild(newDiv)

	document.getElementById("cakes").appendChild(newCol)
	//document.getElementById("cakes").appendChild(newDiv)

}











