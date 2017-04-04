var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName ='Marian'
if ( allNames.indexOf(newName) === -1 ) { //czemu jest -1??
	var newName = allNames.push(newName);
	console.log(allNames);
}