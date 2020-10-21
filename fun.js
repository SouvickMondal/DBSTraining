function *generatorFunction(){
	console.log("One")
	yield 'line3'
	console.log("Two")
	yield 'line5'
	console.log("Three")
	yield 'line7'
	console.log("Four")
	yield 'line9'
}

const obj = generatorFunction();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());