/*** Object Constructors ***/
function Elephant(name, age) {
	this.name = name;
	this.age = age;
	this.image = "elephant.png";
	this.type = "Elephant";
}

function Duck(name, age) {
	this.name = name;
	this.age = age;
	this.image = "duck.png";
	this.type = "Duck";
}

function Wolf(name, age) {
	this.name = name;
	this.age = age;
	this.image = "wolf.png";
	this.type = "Wolf";
}

/*** Global Variables ***/
var animals = [new Elephant(), new Duck(), new Wolf()];
var names = [
	"Toothless",
	"Marshmallow",
	"Momo",
	"Coco",
	"Ollie",
	"Oscar",
	"Bella",
	"Ruby",
	"Apples"
];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex);
}

// generates either a Elephant, Duck, or Wolf with a random name and random age
function generateRandomAnimal() {
	var randomIdx = getRandomIndex(animals.length);
	var randomAnimal = animals[randomIdx];

	if (randomAnimal instanceof Elephant) {
		return new Elephant(generateRandomName(), generateRandomAge());
	} else if (randomAnimal instanceof Duck) {
		return new Duck(generateRandomName(), generateRandomAge());
	} else if (randomAnimal instanceof Wolf) {
		return new Wolf(generateRandomName(), generateRandomAge());
	}
}

// generates a random name from list of names
function generateRandomName() {
	var randomIdx = getRandomIndex(names.length);
	return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
	var randomIdx = getRandomIndex(5);
	return randomIdx;
}

/*** Document Load ****/
function onLoad() {
	// generate a random animal when the document opens
	var animal = generateRandomAnimal();
	console.log(animal);
	// update the page based on the animal properties
	document.getElementById("animal-properties").textContent =
		animal.name + "  " + animal.age + " years old";
	document.getElementById("animal-img").setAttribute("src", animal.image);
}
