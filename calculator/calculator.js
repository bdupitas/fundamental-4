function add (x,y) {
	return x+y;
}

function subtract (x,y) {
	return x-y;
}

function sum (x) {
	var result = 0;
		x.array.forEach(element => result+= element);
}

var numArr = [1,2,3,4]

console.log(sum(numArr));

function multiply () {
	
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}